import { ActivatedRoute, Routes } from '@angular/router';
import { AllOfCoursesComponent } from './course/all-of-courses/all-of-courses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CouseDetailsComponent } from './course/couse-details/couse-details.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { authGuard } from './auth.guard';
import { LecturerLoginComponent } from './lecturer-login/lecturer-login.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { LogOutComponent } from './log-out/log-out.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'navBar', component: NavBarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'allOfCourses', component: AllOfCoursesComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register/:username', component: RegisterComponent },
    { path: 'cousedetails', component: CouseDetailsComponent, canActivate: [authGuard] },
    { path: 'cousedetails/:courseId', component: CouseDetailsComponent, canActivate: [authGuard] },
    { path: 'addCourse', component: AddCourseComponent },
    { path: 'lecturerLogin', component: LecturerLoginComponent },
    // { path: 'editCourse', component: EditCourseComponent },
    { path: 'editCourse/:courseId', component: EditCourseComponent },
    { path: 'logOut', component: LogOutComponent },



    // {path:'course/allOfCourses',component:AllOfCoursesComponent}
    //{ path: '**', component: NotFoundComponent }
];