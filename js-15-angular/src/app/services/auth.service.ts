import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  registration(email:string, password:string, age:number, name:string){
    const data = {email:email, password:password, age:age, name:name}
    return this.http.post<any>(this.url + "/registration", data).pipe(
        tap(response=>{
          if (response) {
            localStorage.setItem('token', response.data.accessToken);
          }
        })
    );;
  }

  login(email:string, password:string){
    const data = {email:email, password:password};
    return this.http.post<any>(this.url + "/login", data).pipe(
        tap(response=>{
          if (response) {
            localStorage.setItem('token', response.data.accessToken);
          }
        })
    );
  }
}
