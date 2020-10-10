import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.loginFormControls.email.value
    this.authService.login(this.loginFormControls.email.value, this.loginFormControls.password.value);
  }

  get loginFormControls() { return this.signInForm.controls; }
}
