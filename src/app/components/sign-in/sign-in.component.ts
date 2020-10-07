import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  labelPosition: 'Personal' | 'Medic' | 'Institution' = 'Personal';
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    // passwordVerification: ['', [Validators.required]],
    // type: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.loginFormControls.email.value
    this.authService.signup(this.loginFormControls.email.value, this.loginFormControls.password.value);
  }

  get loginFormControls() { return this.signInForm.controls; }
}
