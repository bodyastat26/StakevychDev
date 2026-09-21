using System.Threading.RateLimiting;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Options;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

const string clientCorsPolicy = "ClientCorsPolicy";
const string contactRateLimitPolicy = "ContactRateLimitPolicy";

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var connectionString =
    builder.Configuration.GetConnectionString("DefaultConnection")
    ?? throw new InvalidOperationException(
        "Connection string 'DefaultConnection' was not found.");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(connectionString);
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(clientCorsPolicy, policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "http://localhost:5174"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode =
        StatusCodes.Status429TooManyRequests;

    options.AddPolicy(
        contactRateLimitPolicy,
        httpContext =>
        {
            var clientAddress =
                httpContext.Connection.RemoteIpAddress?.ToString()
                ?? "unknown-client";

            return RateLimitPartition.GetFixedWindowLimiter(
                partitionKey: clientAddress,
                factory: _ => new FixedWindowRateLimiterOptions
                {
                    PermitLimit = 5,
                    Window = TimeSpan.FromMinutes(10),
                    QueueLimit = 0,
                    AutoReplenishment = true
                });
        });

    options.OnRejected = async (context, cancellationToken) =>
    {
        context.HttpContext.Response.ContentType =
            "application/json";

        await context.HttpContext.Response.WriteAsJsonAsync(
            new
            {
                message =
                    "Too many requests. Please try again later."
            },
            cancellationToken);
    };
});

builder.Services
    .AddOptions<EmailOptions>()
    .Bind(builder.Configuration.GetSection(
        EmailOptions.SectionName))
    .Validate(options =>
            !string.IsNullOrWhiteSpace(options.Host),
        "Email host is required.")
    .Validate(options =>
            options.Port > 0,
        "Email port is invalid.")
    .Validate(options =>
            !string.IsNullOrWhiteSpace(options.Username),
        "Email username is required.")
    .Validate(options =>
            !string.IsNullOrWhiteSpace(options.Password),
        "Email password is required.")
    .Validate(options =>
            !string.IsNullOrWhiteSpace(options.SenderEmail),
        "Sender email is required.")
    .Validate(options =>
            !string.IsNullOrWhiteSpace(options.AdminEmail),
        "Admin email is required.")
    .ValidateOnStart();

builder.Services.AddScoped<
    IContactNotificationService,
    EmailContactNotificationService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    app.UseHttpsRedirection();
}

app.UseCors(clientCorsPolicy);

app.UseRateLimiter();

app.MapControllers();

app.Run();