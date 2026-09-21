using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using server.Data;
using server.Entities;
using server.Models;
using server.Services;
using StatkevychDevelopment.Server.Contracts.Contact;

namespace server.Controllers;

[ApiController]
[Route("api/contact")]
[EnableRateLimiting(ContactRateLimitPolicy)]
public sealed class ContactController(
    ApplicationDbContext dbContext,
    IContactNotificationService notificationService,
    ILogger<ContactController> logger)
    : ControllerBase
{
    private const string ContactRateLimitPolicy =
        "ContactRateLimitPolicy";

    [HttpPost]
    public async Task<ActionResult<ContactResponse>> Create(
        [FromBody] ContactRequest request,
        CancellationToken cancellationToken)
    {
        var contactMessage = new ContactMessage
        {
            Name = request.Name.Trim(),
            Email = request.Email.Trim(),
            Company = string.IsNullOrWhiteSpace(request.Company)
                ? null
                : request.Company.Trim(),
            Message = request.Message.Trim(),
            CreatedAtUtc = DateTime.UtcNow
        };

        dbContext.ContactMessages.Add(contactMessage);

        await dbContext.SaveChangesAsync(cancellationToken);

        logger.LogInformation(
            "Contact request {ContactMessageId} was saved.",
            contactMessage.Id);

        try
        {
            await notificationService.NotifyAsync(
                contactMessage,
                cancellationToken);
        }
        catch (Exception exception)
        {
            logger.LogError(
                exception,
                "Notifications for contact request {ContactMessageId} failed.",
                contactMessage.Id);
        }

        return Ok(new ContactResponse(
            "Your request has been received.",
            contactMessage.CreatedAtUtc));
    }
}