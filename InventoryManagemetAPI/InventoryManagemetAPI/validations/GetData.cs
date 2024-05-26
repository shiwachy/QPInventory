using InventoryManagement.Models;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;

namespace InventoryManagement.validations
{

    public class GetData
    {
        private readonly QpinventoryDbContext dbContext;
        public GetData(QpinventoryDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public int getLinkId(string link)
        {
            if (dbContext == null)
            {
                throw new InvalidOperationException("dbContext is not initialized.");
            }
            if (string.IsNullOrEmpty(link))
            {
                throw new ArgumentException("Link property cannot be null or empty.", nameof(link));
            }
            // Fetch the ID of the hyperlink that matches the link in the receiving object
            int? linkId = dbContext.MstHyperlinks
                                   .Where(h => h.Hyperlink == link)
                                   .Select(h => (int?)h.HyperlinkId) // Use int? to handle cases where no match is found
                                   .FirstOrDefault();
            if (linkId == null)
            {
                // Handle the case where no matching link is found
                throw new InvalidOperationException($"No hyperlink found for link: {link}");
            }
            else
            {
                return linkId.Value;
            }

           
        }  

        public List<int> getKeywordsIdList(RecivingObj obj)
        {
            if (obj == null)
            {
                throw new ArgumentNullException(nameof(obj), "RecivingObj cannot be null.");
            }
            if (obj.keyWords == null)
            {
                throw new ArgumentException("Keywords list cannot be null or empty.", nameof(obj));
            }
            // Fetch the IDs of keywords that match the provided keywords
            List<int> keywordIds = dbContext.MstKeywords
                                            .Where(k => obj.keyWords.Contains(k.Keyword))
                                            .Select(k => k.KeywordId)
                                            .ToList();
            return keywordIds;
        }

        public int getSearchTermId(string SearchTerm)
        {
            int? searchTermId = dbContext.MstKeywords
                                   .Where(h => h.Keyword == SearchTerm)
                                   .Select(h => (int?)h.KeywordId) // Use int? to handle cases where no match is found
                                   .FirstOrDefault();
            return Convert.ToInt32(searchTermId);
        }

        public List<string> getLinks(string SearchTerm) {
            int searchId = getSearchTermId(SearchTerm);
            List<int?> linksId = dbContext.TranLinkKeywords
                                .Where(lst => lst.KeywordId == searchId)
                                .Select(lst => lst.HyperlinkId)
                                .ToList();

            List<string?> links = dbContext.MstHyperlinks
                       .Where(link => linksId.Contains(link.HyperlinkId))
                       .Select(link => link.Hyperlink)
                       .ToList();

            return links;
        }

        public List<string> GetKeywordsByLinkId(int linkId)
        {
            
                List<int?> keywordIds = dbContext.TranLinkKeywords
                                              .Where(k => k.HyperlinkId == linkId)
                                              .Select(k => k.KeywordId)
                                              .ToList();
                List<string?> keywords = dbContext.MstKeywords
                                    .Where(k => keywordIds.Contains(k.KeywordId))
                                    .Select(k => k.Keyword)
                                    .ToList();
            if (keywords==null)
            {
                throw new InvalidOperationException($"No hyperlink found for link: {keywords}");
            }
            else
            {
                return keywords;
            }

        }
    }

   
}
