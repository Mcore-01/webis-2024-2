import { Component } from '@angular/core';
import {RegistrationComponent} from "../../components/registration/registration.component";
import {LoginComponent} from "../../components/login/login.component";
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  standalone: true,
    imports: [
        RegistrationComponent,
        LoginComponent,
        RouterOutlet,
        RouterLink
    ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
    showButton:boolean = false;
    constructor(private router: Router) {
    }

    redirect(url:string){
        this.router.navigate(['/'+url]);
        this.showButton = true;
    }
}
