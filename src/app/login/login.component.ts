import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, Validators,FormGroup ,ReactiveFormsModule,FormControl  } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services';

import {AuthenticationService } from '../_services/authentication.service';
@Component(

  {selector: 'app-login',
  templateUrl: 'login.component.html',
  })
export class LoginComponent implements OnInit {
    loading : boolean = false;
    returnUrl: string;
    submitted: boolean = false;
    invalidLogin: boolean = false;
    loginForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService) {}
  //  get f() { return this.loginForm.controls; }


    /*onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }*/
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
          return;
        }
        if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
            this.router.navigate(['list-user']);
        }else {
          this.invalidLogin = true;
        }
      }

      ngOnInit() {
        this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
      }
