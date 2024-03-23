import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {TodoComponent} from "./components/todo/todo.component";
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HttpClientModule, RegistrationComponent, LoginComponent, TodoComponent, TodoPageComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'n';
}
