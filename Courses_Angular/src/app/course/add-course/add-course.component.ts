import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../../models/course.model';
import { CourseServiceService } from '../../service/course-service.service';
@Component({
  selector: 'app-add-course',
  templateUrl:'./add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  addCourseForm!: FormGroup
  newCoursesForm!: FormGroup
  course!: Course
  newCourses: string[] = ['']
  courseAdded!: boolean
  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      courseName: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      CountOfLessons: new FormControl('', Validators.required),
      StartDate: new FormControl('', [Validators.required]),
      learningType: new FormControl(),
      LecturerId: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      SyllabusOfCourse: this.formBuilder.array([]),
    });
    this.addSilavos();
    this.newCoursesForm = this.fb.group({
      newCourse1: new FormControl('')
    })
  }
  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router, private courseService: CourseServiceService,
    private formBuilder: FormBuilder
  ) { }
  public get newCoursesControls(): string[] {
    return Object.keys(this.newCoursesForm.controls);
  }
  get silavos() {
    return this.addCourseForm.get('SyllabusOfCourse') as FormArray;
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

  onSubmit() {
    for (let i = this.silavos.length - 1; i >= 0; i--) {
      if (this.silavos.at(i)?.value === '') {
        this.removeSilavos(i);
      }
    }


    if (this.addCourseForm.valid) {
      console.log(this.addCourseForm.value);
      this.courseService.postCourse(this.addCourseForm.value).subscribe(
        (response) => {
          console.log('Course added successfully:', response);
          Swal.fire('The Course Added Successfully :)');
          this.router.navigate(['allOfCourses'])
        },
        (error) => {
          console.error('Error adding course:', error);
        }
      );
    } else {
      console.error('Form is invalid. Cannot add course.');
    }
  }
}
