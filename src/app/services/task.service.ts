import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000"

  constructor(private http:HttpClient) { }
  getTasks(): Observable<any[]>{
   return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }
}
