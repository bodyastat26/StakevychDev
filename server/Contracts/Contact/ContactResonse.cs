namespace StatkevychDevelopment.Server.Contracts.Contact;

public sealed record ContactResponse(
    string Message,
    DateTime ReceivedAtUtc
);