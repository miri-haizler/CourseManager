import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {} 

  public getUserByName(user:string):Observable<User>{
    return this.http.get<User>(`https://localhost:7114/User/byname/${user}`)
  }

  public postUser(user:User):Observable<User>{
   return this.http.post<User>(`https://localhost:7114/User`,user)
  }
  // public addUser(user: Users): Observable<Users> {
  //   return this.http.post<Users>(`https://localhost:7140/api/User`,user)
  // }
}

