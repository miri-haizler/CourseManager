using Courses_Api.Entities;

namespace Courses_Api
{
    public class DataContext
    {
        public  List<Category> categories { get; set; }
        public  List<Course> courses { get; set; }
        public  List<Lecturer> lecturers { get; set; }
        public  List<User> users { get; set; }
        public DataContext()
        {
            categories = new List<Category>();
            categories.Add(new Category(1, "Category 1", "architectorIcon.png"));
            categories.Add(new Category(2, "Category 2", "programingIcon.png"));
            courses = new List<Course>();
            courses.Add(new Course(1, "Course 1", 1, 10, DateTime.Now, new List<string> { "Topic 1", "Topic 2" }, Courses_Api.Entities.way_of_learning.frontal, 1, "architector.png"));
            courses.Add(new Course(2, "Course 2", 2, 8, DateTime.Now.AddDays(14), new List<string> { "Topic 3", "Topic 4" }, Courses_Api.Entities.way_of_learning.zum, 2, "programing.jpg"));
            lecturers= new List<Lecturer>();
            lecturers.Add(new Lecturer(1, "John Doe", "123 Main St", "john.doe@example.com", "password1"));
            lecturers.Add(new Lecturer(2, "Jane Smith", "456 Elm St", "jane.smith@example.com", "password2"));
            users = new List<User>();
            users.Add(new User(1, "John Doe", "123 Main St", "john.doe@example.com", "password1"));
            users.Add(new User( 2, "Jane Smith", "456 Elm St", "jane.smith@example.com", "password2"));
        }
    };
}