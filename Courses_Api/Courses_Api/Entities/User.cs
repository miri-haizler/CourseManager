namespace Courses_Api.Entities
{
    public class User
    {
      public  int userId { get; set; }
        public string userName { get; set; }
        public string userAddress { get; set; }
        public string userEmail { get; set; }
        public string userPassword { get; set; }
        public User()
        {

        }
        public User(int userId, string userName, string userAddress, string userEmail, string userPassword)
        {
            this.userId = userId;
            this.userName = userName;
            this.userAddress = userAddress;
            this.userEmail = userEmail;
            this.userPassword = userPassword;
        }
    }
}