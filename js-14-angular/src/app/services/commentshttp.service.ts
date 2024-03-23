import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable, retry, tap} from "rxjs";
import {Comment} from "../models/comment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentshttpService {

    comments : Comment[];
      constructor(private http:HttpClient) { }
      async getAllComments(postId:number) {
          return await lastValueFrom( this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
              .pipe(
                  tap(data => this.comments = data)
              ));
      }
        // getAllComments(postId:number) : Observable<Comment[]>{
        //     return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        //         .pipe(map((data : any[]) =>
        //             {return data.map(item =>
        //             {return new Comment(item.postId, item.id, item.name, item.email, item.body)})})
        //         )
        // }
}
