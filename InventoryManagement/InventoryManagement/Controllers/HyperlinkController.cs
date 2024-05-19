using InventoryManagement.Models;
using InventoryManagement.validations;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InventoryManagement.Controllers
{
    [EnableCors("allowInventoryCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class HyperlinkController : ControllerBase
    {
        private readonly QpinventoryDbContext _dbcontext;
        public HyperlinkController(QpinventoryDbContext _dbcontext) { 
            this._dbcontext = _dbcontext;
        }


        // GET: api/<HyperlinkController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dbcontext.MstKeywords);
        }

        [HttpGet("GetKeywords")]
        public IActionResult GetKeywords()
        {
            try
            {   
                List<MstKeyword> mstKeywords = _dbcontext.MstKeywords.ToList();
                List<string> keywords = new List<string>();
                foreach (MstKeyword keyword in mstKeywords)
                {
                    keywords.Add(keyword.Keyword);
                }
                return Ok(keywords);
            }
            catch (Exception ex)
            {
                // Log the exception (not shown here for brevity)
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the data.");
            }
        }


        [HttpPost("GetLinkInfo")]
        public IActionResult GetLinkInfo([FromBody] string link) {
            try
            {
                GetData getData = new GetData(_dbcontext);
                int linkId = getData.getLinkId(link);
                List<string> keywords = getData.GetKeywordsByLinkId(linkId);
                return Ok(keywords);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
        }


        // GET api/<HyperlinkController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        
        // POST api/<HyperlinkController>
        [HttpPost]
        public IActionResult Post([FromBody] RecivingObj obj)
        {
            try
            {
                MstHyperlink mstHyperlink = new MstHyperlink(); 
                KeywordManager keywordManager = new KeywordManager(_dbcontext);
                MapLink_Keys newMap = new MapLink_Keys(_dbcontext);
                mstHyperlink.Hyperlink = obj.hyperlink;
                keywordManager.AddMissingKeywords(obj.keyWords.ToList());
                _dbcontext.MstHyperlinks.Add(mstHyperlink);
                _dbcontext.SaveChanges();
                newMap.Map(obj);
                _dbcontext.SaveChanges();
                return Ok(obj);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("GetLinks")]
        public IActionResult GetLinks([FromBody] string SearchTerm) {

            try
            {
                List<string> hyperlinks = new List<string>();
                if (string.IsNullOrEmpty(SearchTerm))
                {
                    hyperlinks = _dbcontext.MstHyperlinks
                            .Select(link => link.Hyperlink)
                            .ToList();
                }
                else
                {
                    GetData getData = new GetData(_dbcontext);
                    hyperlinks = getData.getLinks(SearchTerm);                   
                }
                return Ok(hyperlinks);
            }
            catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] RecivingObj obj)
        {
            try
            {
                KeywordManager keywordManager = new KeywordManager(_dbcontext);
                GetData getData = new GetData (_dbcontext);
                MapLink_Keys newMap = new MapLink_Keys(_dbcontext);
                keywordManager.AddMissingKeywords(obj.keyWords.ToList());
                newMap.RemoveRelation(obj);
                _dbcontext.SaveChanges();
                newMap.Map(obj);
                _dbcontext.SaveChanges();
                return Ok(obj);
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }


        // PUT api/<HyperlinkController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HyperlinkController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
