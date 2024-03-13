import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private Http:HttpClient) { }

  public getCourses():Observable<Course[]>{
    return this.Http.get<Course[]>(`https://localhost:7169/api/Course`);
  }

  public getCourseById(id:number){
    return this.Http.get<Course>(`https://localhost:7169/api/Course/${id}`)
  }

  public save(course:Course){
    this.Http.post(`api/Course`,course).subscribe(()=>{
      console.log("added course successfully");
      window.location.reload();
    })
  }

  // public getPromiseCourse():Promise<any>{
  //   var x=true;
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(x){
  //         resolve('ok')
  //       }
  //       reject('error')
  //     },3000)
  //   })
  // }

  public deleteCourse(id:number){
    return this.Http.delete(`https://localhost:7169/api/Course/${id}`)
    .subscribe(()=>{
      console.log("deleted course successfully");
      window.location.reload();
    })
  }
}
