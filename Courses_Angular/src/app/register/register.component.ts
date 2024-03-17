import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule,MatFormFieldModule,
    MatInputModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  host: {ngSkipHydration: 'true'},

})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  myUser!: User

  ngOnInit(): void {
    console.log("init");
    this.registerForm = this.fb.group({
      name: new FormControl(this.activateRoute.snapshot.paramMap.get('username')?.toString()),
      address: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

  }

  constructor(private userService: UserService,
    private activateRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  public registerUser() {
    this.myUser = this.registerForm.value;
    this.myUser.userName = this.registerForm.value.name;
    this.myUser.userAddress = this.registerForm.value.address;
    this.myUser.userEmail = this.registerForm.value.email;
    this.myUser.userPassword = this.registerForm.value.password;

    this.userService.postUser(this.myUser)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['allOfCourses'])

      });

  }


}