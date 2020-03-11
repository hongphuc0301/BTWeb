import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import Notiflix from 'notiflix';
// import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
    // private toastr: ToastrService
  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get fval() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    let data = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        phone: this.registerForm.value.phone,
        password: this.registerForm.value.password,
    }
    console.log("data", data);
    this.http.post(`http://localhost:3000/auth/register`, data ).subscribe(
      (res)=>{
        console.log("res ", res);
        Notiflix.Notify.Success('User Registered successfully!!');
        this.router.navigate(['/']);
     },
      (error)=>{
        console.log( "error",error)
        // this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }

}
