import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, lastValueFrom, Observable, tap, throwError} from 'rxjs';
import { Post } from '../models/post';
import { map } from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostshttpService {
  
    constructor(private http: HttpClient, private router: Router) { }




    async getPost(pageNumber: number){
        const response = this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${pageNumber}`)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                            console.log(error.status);
                            this.router.navigate(['/error']);
                            return new Observable<Post>();
                    })
            );
        return await lastValueFrom(response);
    }

    // getPost(pageNumber: number) : Observable<Post> {
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${pageNumber}`).pipe(
    //
    //     map((data:any) => {
    //         return new Post(data.userId, data.id, data.title, data.body)
    //     }),
    //     catchError((error: HttpErrorResponse) => {
    //         console.log(error.status);
    //         this.router.navigate(['/error']);
    //         return new Observable<Post>();
    //     })
    // );
    // }
}
