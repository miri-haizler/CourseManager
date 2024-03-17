import { Component } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseServiceService } from '../../service/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../service/category.service';
import { Lacturer } from '../../models/lacturer.models';
import { LacturerService } from '../../service/lacturer.service';
import { User } from '../../models/user.models';


@Component({
  selector: 'app-couse-details',
  templateUrl: './couse-details.component.html',
  styleUrl: './couse-details.component.css'
})
export class CouseDetailsComponent {
  course!: Course
  courseId!: number
  category!: Category
  canEditCourse!: boolean
  lecturer!: Lacturer
  img!: any;
  l!: number
  storageuser!: User
  constructor(private courseService: CourseServiceService, private route: ActivatedRoute, private categoryService: CategoryService, private lecturerservice: LacturerService, private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.courseId = param['courseId']
      this.courseService.getCourseById(this.courseId).subscribe({
        next: (res) => {
          this.course = res;
          let u = this.course.categoryId as number; 
          this.categoryService.getCategoryById(u).subscribe({
            next: (res) => {
              this.img = res.categoryIcon
              console.log("this.img",this.img)
            }
          })
          this.l = this.course.lecturerId as number
          this.lecturerservice.getLacturerById(this.l).subscribe({
            next: (res) => {
              this.lecturer = res
              this.lecturer.lecturerId = res.lecturerId;
              let currentuser = sessionStorage.getItem('currentUser');
              if (currentuser) {
                this.storageuser = JSON.parse(currentuser);
                if (this.storageuser.userId == this.lecturer.lecturerId) {
                  this.canEditCourse = true
                }
              }
            }
          })
        },
        error: (err) => {
          console.log(err);
        }
      })
    })

  }
  editCourse() {
    this.router.navigate(['editCourse', this.course.courseId])
  }
  myDate: Date | null = new Date();




  isDateInNextWeek(date: Date): boolean {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7)

    if (date <= nextWeek) {
      return true;
    }
    else {
      return false;
    }
  }

  getDateStyle() {
    if (this.course.startCourse) {
      this.myDate = new Date(this.course.startCourse);
      const style = this.isDateInNextWeek(this.myDate) ? 'pink' : 'green';
      return style ? { 'color': style } : null;
    }
    return null;
  }

}

