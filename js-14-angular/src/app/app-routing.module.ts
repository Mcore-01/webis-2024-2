import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

const routesChildrenComments: Routes = [
  {path: 'posts/:id', component: PostsComponent, children:
  [{path: 'comments', component: CommentsComponent}]}
]
const routes: Routes = [
  {path: '', component: PostsPageComponent, children:routesChildrenComments},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
