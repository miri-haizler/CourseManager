import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course.model';
import { Lacturer } from '../models/lacturer.models';
import { LacturerService } from '../service/lacturer.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-lecturer-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,],
  templateUrl: './lecturer-login.component.html',
  styleUrl: './lecturer-login.component.css'
})
export class LecturerLoginComponent {
  lecturerLoginForm!: FormGroup
  CourseName!: string[];

  ngOnInit(): void {
    this.lecturerLoginForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      NameOfCourse: ['']
    });

  }

  lacturer!: Lacturer
  courses!: Course[]

  constructor(private lacturerService: LacturerService, private router: Router, 
    private snackBar: MatSnackBar, private fb: FormBuilder
  ) {

  }

  public lecturerLogin() {
    this.lacturerService.getLacturerByName(this.lecturerLoginForm?.value.name)
      .subscribe(data => {
        this.lacturer = data
        if (this.lacturer.lecturerPassword === this.lecturerLoginForm?.value.password) {
          sessionStorage.setItem('currentUser',JSON.stringify(this.lacturer))
          this.router.navigate(['allOfCourses'])
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
            this.router.navigate(['/register', this.lecturerLoginForm.value.name]);
          }
        });

      }
    }
