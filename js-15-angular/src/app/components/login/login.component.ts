import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormsModule, NgForm} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
  isInvalidAuth: boolean = false;
  errorMessage:string ="";
  constructor(private http: AuthService, private router: Router) {
  }

  login(form: NgForm){
    this.http.login(form.value.email, form.value.password).subscribe({
      next: (data:any) => {console.log(data); this.router.navigate(['/'])},
      error: error => {console.log(error); this.isInvalidAuth = true;this.errorMessage = error.error.message;}
    })
  }
}
