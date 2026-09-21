using System.Net;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using server.Entities;
using server.Options;

namespace server.Services;

public sealed class EmailContactNotificationService(
    IOptions<EmailOptions> options,
    ILogger<EmailContactNotificationService> logger)
    : IContactNotificationService
{
    private readonly EmailOptions _options = options.Value;

    public async Task NotifyAsync(
        ContactMessage contactMessage,
        CancellationToken cancellationToken)
    {
        await SendAdminNotificationAsync(
            contactMessage,
            cancellationToken);

        await SendClientConfirmationAsync(
            contactMessage,
            cancellationToken);

        logger.LogInformation(
            "Email notifications for contact request {ContactMessageId} were sent.",
            contactMessage.Id);
    }

    private async Task SendAdminNotificationAsync(
        ContactMessage contact,
        CancellationToken cancellationToken)
    {
        var safeName = WebUtility.HtmlEncode(contact.Name);
        var safeEmail = WebUtility.HtmlEncode(contact.Email);
        var safeCompany = WebUtility.HtmlEncode(
            contact.Company ?? "Not provided");

        var safeMessage = WebUtility.HtmlEncode(contact.Message)
            .Replace("\r\n", "<br>")
            .Replace("\n", "<br>");

        var message = CreateMessage(
            recipientEmail: _options.AdminEmail,
            recipientName: _options.SenderName,
            subject: $"New website request from {contact.Name}",
            htmlBody:
            $"""
             <h2>New contact request</h2>

             <p><strong>Request ID:</strong> {contact.Id}</p>
             <p><strong>Name:</strong> {safeName}</p>
             <p><strong>Email:</strong> {safeEmail}</p>
             <p><strong>Company:</strong> {safeCompany}</p>
             <p><strong>Received:</strong> {contact.CreatedAtUtc:O}</p>

             <h3>Message</h3>
             <p>{safeMessage}</p>
             """);

        message.ReplyTo.Add(
            new MailboxAddress(contact.Name, contact.Email));

        await SendAsync(message, cancellationToken);
    }

    private async Task SendClientConfirmationAsync(
        ContactMessage contact,
        CancellationToken cancellationToken)
    {
        var safeName = WebUtility.HtmlEncode(contact.Name);

        var message = CreateMessage(
            recipientEmail: contact.Email,
            recipientName: contact.Name,
            subject: "We received your request — Statkevych Development",
            htmlBody:
            $"""
             <p>Hello {safeName},</p>

             <p>Thank you for contacting Statkevych Development.</p>

             <p>
                 We have received your request and will review it shortly.
                 We will contact you using the email address you provided.
             </p>

             <p>
                 Reference number: <strong>#{contact.Id}</strong>
             </p>

             <p>
                 Best regards,<br>
                 Statkevych Development
             </p>
             """);

        await SendAsync(message, cancellationToken);
    }

    private MimeMessage CreateMessage(
        string recipientEmail,
        string recipientName,
        string subject,
        string htmlBody)
    {
        var message = new MimeMessage();

        message.From.Add(
            new MailboxAddress(
                _options.SenderName,
                _options.SenderEmail));

        message.To.Add(
            new MailboxAddress(
                recipientName,
                recipientEmail));

        message.Subject = subject;

        message.Body = new BodyBuilder
        {
            HtmlBody = htmlBody,
            TextBody = ConvertHtmlToSimpleText(htmlBody)
        }.ToMessageBody();

        return message;
    }

    private async Task SendAsync(
        MimeMessage message,
        CancellationToken cancellationToken)
    {
        using var smtpClient = new SmtpClient();

        await smtpClient.ConnectAsync(
            _options.Host,
            _options.Port,
            SecureSocketOptions.StartTls,
            cancellationToken);

        await smtpClient.AuthenticateAsync(
            _options.Username,
            _options.Password,
            cancellationToken);

        await smtpClient.SendAsync(
            message,
            cancellationToken);

        await smtpClient.DisconnectAsync(
            quit: true,
            cancellationToken);
    }

    private static string ConvertHtmlToSimpleText(string html)
    {
        return html
            .Replace("<br>", Environment.NewLine)
            .Replace("<p>", "")
            .Replace("</p>", Environment.NewLine)
            .Replace("<h2>", "")
            .Replace("</h2>", Environment.NewLine)
            .Replace("<h3>", "")
            .Replace("</h3>", Environment.NewLine)
            .Replace("<strong>", "")
            .Replace("</strong>", "");
    }
}