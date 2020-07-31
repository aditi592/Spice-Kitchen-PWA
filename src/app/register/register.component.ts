import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  successful: boolean;
  serverErrorMsg: string;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        Validators.nullValidator,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(7)
      ]],
    });
  }

  submitRegistration() {
    const formValue = this.myForm.value;
    this.userService.postUser(formValue).subscribe(
      res => {
        this.successful = true;
        setTimeout(() => this.successful = false, 4000);
        window.location.reload();
        this.serverErrorMsg = '';
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMsg = err.error.join('<br/>');
        } else {
          this.serverErrorMsg = 'Something else is wrong. Pleae contact admin';
        }
      }
    );
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
  get name() {
    return this.myForm.get('fullName');
  }
  get phone() {
    return this.myForm.get('phone');
  }
}
