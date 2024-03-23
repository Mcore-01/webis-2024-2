import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor{

  constructor(private router : Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");
    if (token){
      const reqWithJWT = req.clone({
        headers: req.headers.set("Authorization",
            "Bearer " + token)
      })
      return next.handle(reqWithJWT);
    }
    else{
      this.router.navigate(['/auth']);
      return next.handle(req);
    }
  }
}
