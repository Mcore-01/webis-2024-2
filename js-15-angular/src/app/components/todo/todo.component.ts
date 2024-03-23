import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {FormsModule, NgForm} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ITodo} from "../../models/todo";
import {ignoreElements} from "rxjs";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers:[]
})
export class TodoComponent {
  @Input() todo: ITodo;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<number>();
  constructor() {
  }
  stateCheckbox(event: any){
    event.target.checked = this.todo.completed;
    if (!this.todo.completed){
      this.updateEvent.emit(this.todo.id);
    }

  }
  deleteTodo(){
    this.deleteEvent.emit(this.todo.id);
  }

  getStatus():string{
    return `Статус: ${this.todo.completed?'':'не'}завершено`;
  }
}
