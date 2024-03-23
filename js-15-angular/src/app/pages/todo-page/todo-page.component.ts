import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TodoComponent} from "../../components/todo/todo.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, TodoComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page-component.css',
  providers:[TodoService]
})
export class TodoPageComponent implements OnInit{
  loading = false;
  constructor(public service: TodoService) {
  }
  ngOnInit() {
    this.getAllTodos();
  }

  async createTodo(form: NgForm){
    this.loading = true;
    await this.service.createTodo(form.value.description);
    this.loading = false;
    form.reset();
  }
  getAllTodos(){
    this.service.getALlTodos().subscribe();
  }
  async updateTodo(id:number){
    this.loading = true;
    await this.service.updateTodo(id);
    this.loading = false;
  }
   async deleteTodo(id:number){
    this.loading = true;
    await this.service.deleteTodo(id);
    this.loading=false;
  }
}
