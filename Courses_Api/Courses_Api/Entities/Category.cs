namespace Courses_Api.Entities
{
    public class Category
    {
       public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryIcon { get; set; }
        public Category()
        {

        }
        public Category(int categoryId, string categoryName, string categoryIcon)
        {
            CategoryId = categoryId;
            CategoryName = categoryName;
            CategoryIcon = categoryIcon;
        }
    }
  
}
