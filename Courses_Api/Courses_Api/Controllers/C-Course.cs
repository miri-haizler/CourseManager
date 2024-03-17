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
    public class CourseController : ControllerBase
    {
        private DataContext dataContext;
        public CourseController(DataContext context)
        {
            dataContext = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dataContext.courses);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var course = dataContext.courses.Find(c => c.CourseId == id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Course course)
        {
            course.CourseId = dataContext.courses.Count + 1; // Generate a new id
            dataContext.courses.Add(course);
            return CreatedAtAction(nameof(GetById), new { id = course.CourseId }, course);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Course course)
        {
            var existingCourse = dataContext.courses.Find(c => c.CourseId == id);
            if (existingCourse == null)
            {
                return NotFound();
            }
            // Update the existing course properties
            existingCourse.CourseName = course.CourseName;
            existingCourse.categoryId = course.categoryId;
            existingCourse.CountOfLessons = course.CountOfLessons;
            existingCourse.startCourse = course.startCourse;
            existingCourse.SyllabusOfCourse = course.SyllabusOfCourse;
            existingCourse.LearningType = course.LearningType;
            existingCourse.LecturerId = course.LecturerId;
            existingCourse.Image = course.Image;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var course = dataContext.courses.Find(c => c.CourseId == id);
            if (course == null)
            {
                return NotFound();
            }
            dataContext.courses.Remove(course);
            return NoContent();
        }
    }

    public enum way_of_learning { frontal, zum }

   
}
