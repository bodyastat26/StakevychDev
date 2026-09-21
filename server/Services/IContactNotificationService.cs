using server.Entities;

namespace server.Services;

public interface IContactNotificationService
{
    Task NotifyAsync(
        ContactMessage contactMessage,
        CancellationToken cancellationToken);
}