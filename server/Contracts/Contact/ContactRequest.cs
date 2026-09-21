using System.ComponentModel.DataAnnotations;

namespace server.Models;

public sealed class ContactRequest
{
    [Required(ErrorMessage = "Name is required.")]
    [StringLength(
        100,
        MinimumLength = 2,
        ErrorMessage = "Name must contain between 2 and 100 characters.")]
    public string Name { get; init; } = string.Empty;

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Enter a valid email address.")]
    [StringLength(
        254,
        ErrorMessage = "Email cannot exceed 254 characters.")]
    public string Email { get; init; } = string.Empty;

    [StringLength(
        150,
        ErrorMessage = "Company cannot exceed 150 characters.")]
    public string? Company { get; init; }

    [Required(ErrorMessage = "Message is required.")]
    [StringLength(
        4000,
        MinimumLength = 10,
        ErrorMessage = "Message must contain between 10 and 4000 characters.")]
    public string Message { get; init; } = string.Empty;
}