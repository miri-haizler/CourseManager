import { Component } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseServiceService } from '../../service/course-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-all-of-courses',
  templateUrl: './all-of-courses.component.html',
  styleUrl: './all-of-courses.component.css'
})
export class AllOfCoursesComponent {

  constructor(private courseService: CourseServiceService, private categoryService: CategoryService, private router: Router, private fb: FormBuilder) {

  }
  
  course!: Course[]
  categories!: Category[]
  courses!: any[]
  categoryi!: Category
  filteringForm!: FormGroup
  filteredCourses!: Course[]

  ngOnInit(): void {


    this.courseService.getAllCourses().subscribe({

      next: (res) => {
        this.course = res;
        this.filteredCourses=res;
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  public showDetails(course: Course) {
    this.router.navigate(['cousedetails', course.courseId])
  }

  public filter(){
     for (let index = 0; index < this.categories.length; index++) {
      if(this.categories[index].categoryName===this.filteringForm.value.name){
        console.log("category name  --- for loop", this.categories[index].categoryName);
      }
     }
  }

  selectedCategory = -1;
  selectedLearningType = -1;
  selectedName = "";

  changeFilter() {
    this.course = this.filteredCourses.filter(c => (this.selectedCategory == -1 || c.categoryId == this.selectedCategory) &&
      (this.selectedLearningType == -1 || c.learningType == this.selectedLearningType) && c.courseName?.includes(this.selectedName))
  }

}
