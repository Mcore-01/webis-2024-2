import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITodo} from "../models/todo";
import {catchError, lastValueFrom, map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string = "http://localhost:8000/api/todo";
  todos: ITodo[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  async createTodo(description:string){
    const res = this.http.post<ITodo>(this.url+"/",{description:description}).pipe(
        tap((res:any) => {this.todos.push(res.data)})
    );
    return await lastValueFrom(res);
  }

  getALlTodos() {
    /*return this.http.get<ITodo[]>(this.url + "/").pipe(
        tap((data:ITodo[]) => {this.todos = data; console.log(this.todos)} )
    );*/
    return this.http.get<ITodo[]>(this.url + "/").pipe(
        map((res:any) => {this.todos = res.data;}),
        catchError((res:any) => { this.router.navigate(['/auth']); return new Array<ITodo>;})
    );
  }

  async updateTodo(id:number){
    const res = this.http.put<any>(this.url + `/${id}`, {completed: true}).pipe(
        tap((res:any) => {
          console.log(res.data);
          const index = this.todos.findIndex(e => e.id == id);
          this.todos[index] = res.data;
        })
    );
    return await lastValueFrom(res);
  }

  async deleteTodo(id:number){
    const res = this.http.delete(this.url + `/${id}`).pipe(
        tap((res:any) => {
          const index = this.todos.findIndex(e => e.id == id);
          this.todos.splice(index, 1);
        })
    );
    return await lastValueFrom(res);
  }
}
