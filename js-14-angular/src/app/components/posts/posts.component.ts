import {Component, numberAttribute, OnInit} from '@angular/core';
import { Post } from '../../models/post';
import { PostshttpService } from '../../services/postshttp.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {relative} from "@angular/compiler-cli";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
    post : Post;
    statusComments:boolean;
    constructor(private httpService:PostshttpService, private  activatedRoute: ActivatedRoute, private router:Router) {}

    ngOnInit(): void {
        this.getPost();
    }

    getPost(){
        this.activatedRoute.paramMap.pipe(
            switchMap(params => {
                const id = +params.getAll("id");
                this.statusComments = false;
                return this.httpService.getPost(id);
            }))
            .subscribe((data: Post) => this.post = data);
    }

    openComments() : void{
        if (this.statusComments){
            this.router.navigate([`/posts/${this.post.id}`]);
        }
        this.statusComments = !this.statusComments;
    }
}
