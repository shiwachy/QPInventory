using InventoryManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;


namespace InventoryManagement.validations
{
    public class KeywordManager
    {
        private readonly QpinventoryDbContext dbContext; // Inject your DbContext here   
        public KeywordManager(QpinventoryDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        //Adds new keywords to db 
        public void AddMissingKeywords(List<string> keylst)
        {
            MstKeyword mstKeyword = new MstKeyword();
            List<MstKeyword> keywords = new List<MstKeyword>();
            keywords = dbContext.MstKeywords.ToList();
            List<string> existingKeywords = new List<string>();
            List<string> missingKeywords = new List<string>();

            foreach (MstKeyword keys in keywords)
            {
                existingKeywords.Add(keys.Keyword);
            }
            foreach(string lst in keylst)
            {
                if (!existingKeywords.Contains(lst))
                {
                    mstKeyword.Keyword = lst;
                    dbContext.MstKeywords.Add(mstKeyword);
                    dbContext.SaveChanges();
                }
            }
        }
    }

    public class MapLink_Keys
    {    
        private readonly QpinventoryDbContext dbContext;
        public MapLink_Keys(QpinventoryDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void Map(RecivingObj obj)
        {
           GetData getData = new GetData(dbContext);
            int linkId = getData.getLinkId(obj.hyperlink);
            List<int> keywordIdslst = getData.getKeywordsIdList(obj);
            
            foreach(int key in keywordIdslst)
            {
                TranLinkKeyword newMap = new TranLinkKeyword
                {
                    HyperlinkId = linkId,
                    KeywordId = key
                };
                dbContext.Add(newMap);
                dbContext.SaveChanges();
            }
        }

        public void RemoveRelation(RecivingObj obj)
        {
            GetData getData = new GetData(dbContext);
            int linkId = getData.getLinkId(obj.hyperlink);
            List<int> keywordIds = getData.getKeywordsIdList(obj); 

            // Step 3: Remove relations from TranLink table
            foreach (int kId in keywordIds)
            {
                var relation = dbContext.TranLinkKeywords
                                        .FirstOrDefault(tl => tl.HyperlinkId == linkId && tl.KeywordId == kId);
                if (relation != null)
                {
                    dbContext.TranLinkKeywords.Remove(relation);
                }
            }

        }


    }

}
