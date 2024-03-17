import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
// import { Course } from '../models/course-model/course-model.module';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) {} 

  public getCourseById(id: number):Observable<Course>{
    return this.http.get<Course>( `https://localhost:7114/Course/${id}`)

  }

  public getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>('https://localhost:7114/Course');
  }
  public postCourse(course:Course):Observable<Course>{
    course.learningType = parseInt(course.learningType);
    return this.http.post<Course>(`https://localhost:7114/Course`,course)
   }
   public putCourse(id:number,course:Course):Observable<any>{
    return this.http.put<any>(`https://localhost:7114/Course/${id}`,course)
   }
}
