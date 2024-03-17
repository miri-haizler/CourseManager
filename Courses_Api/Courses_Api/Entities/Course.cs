namespace Courses_Api.Entities
{
   public enum way_of_learning { frontal,zum }
    public class Course
    {
       public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int categoryId { get; set; }
        public int CountOfLessons { get; set; }
        public DateTime startCourse { get; set; }
        public List<string> SyllabusOfCourse { get; set; }
        public way_of_learning LearningType { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }
        public Course()
        {

        }
        public Course(int courseId, string courseName, int categoryId, int numOfCourdses, DateTime strartCourse, List<string> syllabusOfCourse, way_of_learning learning, int lecturerId, string image)
        {
            CourseId = courseId;
            CourseName = courseName;
            categoryId = categoryId;
            CountOfLessons = numOfCourdses;
            startCourse = strartCourse;
            SyllabusOfCourse = syllabusOfCourse;
            LearningType = learning;
            LecturerId = lecturerId;
            Image = image;
        }
    }
}
