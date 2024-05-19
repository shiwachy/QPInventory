using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace InventoryManagement.Models;

public partial class QpinventoryDbContext : DbContext
{
    public QpinventoryDbContext()
    {
    }

    public QpinventoryDbContext(DbContextOptions<QpinventoryDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MstHyperlink> MstHyperlinks { get; set; }

    public virtual DbSet<MstKeyword> MstKeywords { get; set; }

    public virtual DbSet<TranLinkKeyword> TranLinkKeywords { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MstHyperlink>(entity =>
        {
            entity.HasKey(e => e.HyperlinkId).HasName("PK__mst_hype__595D09A563CDDE80");

            entity.ToTable("mst_hyperlinks");

            entity.Property(e => e.HyperlinkId).HasColumnName("hyperlinkId");
            entity.Property(e => e.Hyperlink)
                .IsUnicode(false)
                .HasColumnName("hyperlink");
        });

        modelBuilder.Entity<MstKeyword>(entity =>
        {
            entity.HasKey(e => e.KeywordId).HasName("PK__mst_keyw__A6DC9B8AD4059E0A");

            entity.ToTable("mst_keywords");

            entity.Property(e => e.KeywordId).HasColumnName("keywordId");
            entity.Property(e => e.Keyword)
                .IsUnicode(false)
                .HasColumnName("keyword");
        });

        modelBuilder.Entity<TranLinkKeyword>(entity =>
        {
            entity.HasKey(e => e.TrackId);

            entity.ToTable("tran_link_Keyword");

            entity.Property(e => e.HyperlinkId).HasColumnName("hyperlinkId");
            entity.Property(e => e.KeywordId).HasColumnName("keywordId");

            entity.HasOne(d => d.Hyperlink).WithMany(p => p.TranLinkKeywords)
                .HasForeignKey(d => d.HyperlinkId)
                .HasConstraintName("FK__tran_link__hyper__73BA3083");

            entity.HasOne(d => d.Keyword).WithMany(p => p.TranLinkKeywords)
                .HasForeignKey(d => d.KeywordId)
                .HasConstraintName("FK__tran_link__keywo__74AE54BC");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
