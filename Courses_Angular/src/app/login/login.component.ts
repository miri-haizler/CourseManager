
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CourseServiceService } from '../service/course-service.service';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LacturerService } from '../service/lacturer.service';
import { CommonModule } from '@angular/common'; 
import { Course } from '../models/course.model';
import { User } from '../models/user.models';
import { Lacturer } from '../models/lacturer.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule,  MatFormFieldModule,
    MatInputModule,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {ngSkipHydration: 'true'},

})

export class LoginComponent {
  loginForm!: FormGroup
  CourseName!: string[];
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      selectedCourse: [null, Validators.required]
    });

  }

  user!: User
  lacturer!: Lacturer
  courses!: Course[]
  showDropdown = false;

  constructor(private userService: UserService,  private router: Router,
    private snackBar: MatSnackBar, private fb: FormBuilder
  ) {

  }

  public userLogin() {
    if (this.loginForm.valid) {
      console.log('Form is valid. Ready for submission.');
    } else {
      console.log('Form is invalid. Cannot submit.');
    }
    this.userService.getUserByName(this.loginForm?.value.name)
      .subscribe(data => {
        this.user = data
  

        if (this.user.userPassword === this.loginForm?.value.password) {
          sessionStorage.setItem('currentUser',JSON.stringify(this.user))
          this.router.navigate(['/allOfCourses'])
        }
        else {
          console.log("password invalid");

          this.snackBar.open('Password invalid', 'Close', {
            duration: 3000
          });
          throw "password invalid";
        }

      }
        , err => {

          if (err.status === 404) {
            this.router.navigate(['/register', this.loginForm.value.name]);
          }
        });

  }
 
  IAmLecturer(): void {
    this.CourseName = this.CourseName || [];

    const controlName = `CourseName${this.CourseName.length + 1}`;
    this.loginForm.addControl(controlName, this.fb.control('', Validators.required));
    this.CourseName.push(controlName);
}


}