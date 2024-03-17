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
    public class UserController : ControllerBase
    {
        private readonly DataContext dataContext;
        public UserController(DataContext context)
        {
            dataContext = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dataContext.users);
        }

        [HttpGet("byname/{name}")]
        public IActionResult GetByName(string name)
        {
            var user = dataContext.users.Find(u => u.userName == name);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("byid/{id}")]
        public IActionResult GetById(int id)
        {
            var user = dataContext.users.Find(u => u.userId == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            user.userId = dataContext.users.Count + 1;
            dataContext.users.Add(user);
            Console.WriteLine("i am workinggggggggggggggggg");
            return CreatedAtAction(nameof(GetById), new { id = user.userId }, user);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User user)
        {
            var existingUser = dataContext.users.Find(u => u.userId == id);
            if (existingUser == null)
            {
                return NotFound();
            }
            existingUser.userName = user.userName;
            existingUser.userAddress = user.userAddress;
            existingUser.userEmail = user.userEmail;
            existingUser.userPassword = user.userPassword;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = dataContext.users.Find(u => u.userId == id);
            if (user == null)
            {
                return NotFound();
            }
            dataContext.users.Remove(user);
            return NoContent();
        }
    }


}
