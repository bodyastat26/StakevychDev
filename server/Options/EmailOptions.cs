namespace server.Options;

public sealed class EmailOptions
{
    public const string SectionName = "Email";

    public required string Host { get; init; }

    public int Port { get; init; } = 587;

    public required string Username { get; init; }

    public required string Password { get; init; }

    public required string SenderEmail { get; init; }

    public required string SenderName { get; init; }

    public required string AdminEmail { get; init; }
}