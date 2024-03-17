import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lacturer } from '../models/lacturer.models';

@Injectable({
  providedIn: 'root'
})

export class LacturerService {

  constructor(private http: HttpClient) { }

  public getLacturerByName(lacturer:string):Observable<Lacturer>{
    return this.http.get<Lacturer>(`https://localhost:7114/Lecturer/byname/${lacturer}`)
  }
  public getLacturerById(id: number): Observable<Lacturer> {
    return this.http.get<Lacturer>(`https://localhost:7114/Lecturer/byid/${id}`)
  }
  public postLacturer(lacturer: Lacturer): Observable<Lacturer> {
    return this.http.post<Lacturer>(`https://localhost:7114/Lacturer`, lacturer)
  }
  
}
