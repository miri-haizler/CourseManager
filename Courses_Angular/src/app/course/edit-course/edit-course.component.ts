import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../../models/course.model';
import { CourseServiceService } from '../../service/course-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {
  course!: Course
  courseIdGet!: any
  putcourse!: Course
  editCourseForm!: FormGroup
  newCoursesForm!: FormGroup

  ngOnInit(): void {
    this.editCourseForm = this.fb.group({
      courseName: new FormControl(''),
      categoryId: new FormControl(''),
      countOfLessons: new FormControl(''),
      learningType: new FormControl(''),
      lecturerId: new FormControl(''),
      startCourse: new FormControl(''),
      syllabusOfCourse: this.formBuilder.array([]),

      image: new FormControl('')

    });
    this.addSilavos();
    this.newCoursesForm = this.fb.group({
      newCourse1: new FormControl('')
    })


    this.courseIdGet = this.activateRoute.snapshot.paramMap.get('courseId')
    this.courseservice.getCourseById(this.courseIdGet).subscribe(data => this.setcourse(data)
  ) 
  }
  public get newCoursesControls(): string[] {
    return Object.keys(this.newCoursesForm.controls);
  }

  get silavos() {
    return this.editCourseForm.get('SyllabusOfCourse') as FormArray;
  }

  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private courseservice: CourseServiceService, private router: Router,
    private formBuilder: FormBuilder

  ) {

  }


  addSilavos() {
    this.silavos.push(this.formBuilder.control(''));
  }

  removeSilavos(index: number) {
    this.silavos.removeAt(index);
  }

  onChangeSilavo(index: number) {
    const silavoControl = this.silavos.at(index);
    if (silavoControl && !silavoControl.value) {
      this.removeSilavos(index);
    } else if (index === this.silavos.length - 1) {
      this.addSilavos();
    }
  }

  editCourse() {
    this.putcourse = this.editCourseForm.value
    console.log(this.putcourse)
    this.courseservice.putCourse(this.courseIdGet, this.putcourse).subscribe({
      next: (res) => {
        Swal.fire('The Course edited Successfully :)');
        this.router.navigate(['allOfCourses'])

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  setcourse(data:Course){
    this.course = data
  this.editCourseForm.patchValue(data)
  }
  cancel(){
    this.router.navigate(['allOfCourses'])
  }
}
