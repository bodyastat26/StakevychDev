using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.Data;

public sealed class ApplicationDbContext
    : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<ContactMessage> ContactMessages =>
        Set<ContactMessage>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ContactMessage>(entity =>
        {
            entity.ToTable("ContactMessages");

            entity.HasKey(contact => contact.Id);

            entity.Property(contact => contact.Name)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(contact => contact.Email)
                .HasMaxLength(254)
                .IsRequired();

            entity.Property(contact => contact.Company)
                .HasMaxLength(150);

            entity.Property(contact => contact.Message)
                .HasMaxLength(4000)
                .IsRequired();

            entity.Property(contact => contact.CreatedAtUtc)
                .IsRequired();

            entity.HasIndex(contact => contact.Email);
            entity.HasIndex(contact => contact.CreatedAtUtc);
        });
    }
}