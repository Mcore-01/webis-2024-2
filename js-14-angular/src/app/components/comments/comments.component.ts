import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {Comment} from "@angular/compiler";
import {CommentshttpService} from "../../services/commentshttp.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
    @Input() postId : number;
    constructor(public httpService: CommentshttpService, private  activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this.activatedRoute.parent?.paramMap.pipe(
          switchMap(params => {
            const id = +params.getAll("id");
            console.log(params);
            return this.httpService.getAllComments(id);
          }))
          .subscribe();
    }
}
