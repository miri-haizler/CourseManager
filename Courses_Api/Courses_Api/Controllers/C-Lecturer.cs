using Courses_Api;
using Courses_Api.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LecturerController : ControllerBase
    {

        private DataContext dataContext;
        public LecturerController(DataContext context)
        {
            dataContext = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dataContext.lecturers);
        }

        [HttpGet("byname/{name}")]
        public IActionResult GetByName(string name)
        {
            var lecturer = dataContext.lecturers.Find(l => l.LecturerName == name);
            if (lecturer == null)
            {
                return NotFound();
            }
            return Ok(lecturer);
        }

        [HttpGet("byid/{id}")]
        public IActionResult GetById(int id)
        {
            var lecturer = dataContext.lecturers.Find(l => l.LecturerId == id);
            if (lecturer == null)
            {
                return NotFound();
            }
            return Ok(lecturer);
        }


        [HttpPost]
        public IActionResult Post([FromBody] Lecturer lecturer)
        {
            lecturer.LecturerId = dataContext.lecturers.Count + 1;
            dataContext.lecturers.Add(lecturer);
            return CreatedAtAction(nameof(GetById), new { id = lecturer.LecturerId }, lecturer);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Lecturer lecturer)
        {
            var existingLecturer = dataContext.lecturers.Find(l => l.LecturerId == id);
            if (existingLecturer == null)
            {
                return NotFound();
            }
            existingLecturer.LecturerName = lecturer.LecturerName;
            existingLecturer.LecturerAddress = lecturer.LecturerAddress;
            existingLecturer.LecturerEmail = lecturer.LecturerEmail;
            existingLecturer.LecturerPassword = lecturer.LecturerPassword;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var lecturer = dataContext.lecturers.Find(l => l.LecturerId == id);
            if (lecturer == null)
            {
                return NotFound();
            }
            dataContext.lecturers.Remove(lecturer);
            return NoContent();
        }
    }

}
