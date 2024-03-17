import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AllOfCoursesComponent } from './all-of-courses/all-of-courses.component';
import { CouseDetailsComponent } from './couse-details/couse-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { IconPipePipe } from '../icon-pipe.pipe';


@NgModule({
  declarations: [CouseDetailsComponent, AddCourseComponent, AllOfCoursesComponent, EditCourseComponent, IconPipePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, DatePipe,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,

  ],
  providers: [DatePipe, provideNativeDateAdapter()],
  exports: [ReactiveFormsModule, FormsModule]
})
export class CourseModule { }
