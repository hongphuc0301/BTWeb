import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Notiflix from "notiflix";
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from 'src/app/_services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhucBT';
  public fullname = "Huỳnh Thị Hồng Phúc";
  public message = ""

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService : AuthenticationService,
      private http: HttpClient
    ) { }
  
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  
    }
  
  
      // for accessing to form fields
      get fval() { return this.loginForm.controls; }
  
    onFormSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      let data = {
        email: this.fval.email.value,
        password: this.fval.password.value,
    }
      this.loading = true;
    //    this.authenticationService.login(this.fval.email.value, this.fval.password.value)
       this.http.post(`http://localhost:3000/auth/login`, data ).subscribe(
              (data : any) => {
                if (data.code == 1000) {
                    Notiflix.Notify.Success('User Registered successfully!!');
                    this.router.navigate(['/']);
                    setTimeout(function(){ $('#myModal').hide();
                    $('.show').hide();
                }, 2000);
                   
                } else {
                    Notiflix.Notify.Failure(data.message);
                }
              })
    }
}
