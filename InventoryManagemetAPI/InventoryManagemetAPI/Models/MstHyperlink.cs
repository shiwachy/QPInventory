using System;
using System.Collections.Generic;

//namespace InventoryManagement.Models;

public partial class MstHyperlink
{
    public int HyperlinkId { get; set; }

    public string? Hyperlink { get; set; }

    public virtual ICollection<TranLinkKeyword> TranLinkKeywords { get; set; } = new List<TranLinkKeyword>();
}
