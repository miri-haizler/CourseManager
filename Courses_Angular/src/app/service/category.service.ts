import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategoryById(id: number):Observable<Category>{
    return this.http.get<Category>( `https://localhost:7114/Category/${id}`)
  }
  public getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>( 'https://localhost:7114/Category')
  }
}
