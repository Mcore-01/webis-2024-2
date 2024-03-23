import { Routes } from '@angular/router';
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";

export const routes: Routes = [
    {path:'', component: TodoPageComponent},
    {path:'auth', component: AuthPageComponent},
    {path:'login', component: LoginComponent},
    {path:'reg', component: RegistrationComponent}

];
