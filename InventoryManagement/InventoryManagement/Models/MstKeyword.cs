﻿using System;
using System.Collections.Generic;

namespace InventoryManagement.Models;

public partial class MstKeyword
{
    public int KeywordId { get; set; }

    public string? Keyword { get; set; }

    public virtual ICollection<TranLinkKeyword> TranLinkKeywords { get; set; } = new List<TranLinkKeyword>();
}
