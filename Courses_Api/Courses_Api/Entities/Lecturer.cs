namespace Courses_Api.Entities
{
    public class Lecturer
    {
        public int LecturerId { get; set; }
        public string LecturerName { get; set; }
        public string LecturerAddress { get; set; }
        public string LecturerEmail { get; set; }
        public string LecturerPassword { get; set; }
        public Lecturer()
        {

        }
        public Lecturer(int lecturerId, string lecturerName, string lecturerAddress, string lecturerEmail, string lecturerPassword)
        {
            LecturerId = lecturerId;
            LecturerName = lecturerName;
            LecturerAddress = lecturerAddress;
            LecturerEmail = lecturerEmail;
            LecturerPassword = lecturerPassword;
        }
    }
}
