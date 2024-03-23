import {Component, input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormsModule, NgForm} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  providers:[AuthService]
})
export class RegistrationComponent {
  errorMessage:string ="";
  isInvalidAuth: boolean = false;
  constructor(private http: AuthService, private router: Router) { }

  registerUser(form: NgForm){
    this.http.registration(form.value.email, form.value.password, form.value.age, form.value.name).subscribe({
      next:(data:any) => {console.log(data); this.router.navigate(['/'])},
      error:error => {console.log(error); this.isInvalidAuth = true; this.errorMessage = error.error.message;}
    });
  }
}
