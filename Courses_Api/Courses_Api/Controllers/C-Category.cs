using Courses_Api;
using Courses_Api.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext dataContext;
        public CategoryController(DataContext context)
        {
            dataContext= context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dataContext.categories);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var category = dataContext.categories.Find(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpPost]

        public IActionResult Post([FromBody] Category category)
        {
            category.CategoryId = dataContext.categories.Count + 1; // Generate a new id
            dataContext.categories.Add(category);
            return CreatedAtAction(nameof(GetById), new { id = category.CategoryId }, category);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            var existingCategory = dataContext.categories.Find(c => c.CategoryId == id);
            if (existingCategory == null)
            {
                return NotFound();
            }
            existingCategory.CategoryName = category.CategoryName;
            existingCategory.CategoryIcon = category.CategoryIcon;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var category = dataContext.categories.Find(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound();
            }
            dataContext.categories.Remove(category);
            return NoContent();
        }
    }
}