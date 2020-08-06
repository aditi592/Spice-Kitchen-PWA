import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  serverErrorMsg: string;
  successful: string;
  model = {
    email: '',
    password: ''
  };
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.nullValidator
      ]],
    });
  }
  submitLogin() {
    // const formValue = this.myForm.value;
    this.userService.login(this.myForm.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMsg = err.error.message;
      }
    );

  }
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
