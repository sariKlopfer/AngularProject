import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }

  public getUsers():Observable<User[]>{
    return this.Http.get<User[]>(`https://localhost:7169/api/User`)
  }

  public save(user:User){
    this.Http.post(`api/User`,user).subscribe(()=>{
      console.log("added user successfully");
      window.location.reload();
    })
  }

  // public getPromiseUser():Promise<any>{
  //   var x= true;
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       if(x){
  //         resolve('O.K.')
  //       }
  //       reject('Error')
  //     }, 3000);
  //   })
  // }

  public deleteUser(id:string){
    return this.Http.delete(`https://localhost:7169/api/User/${id}`)
    .subscribe(()=>{
      console.log("deleted user successfully");
      window.location.reload();
    },
    (error)=>{
      console.error('Error: ',error)
    })
  }

  public getUserById(id:number):Observable<User>{
    return this.Http.get<User>(`https://localhost:7169/api/User/${id}`)
  }
}
