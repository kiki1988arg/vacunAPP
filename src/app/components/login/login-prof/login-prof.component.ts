import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrls: ['./login-prof.component.scss']
})
export class LoginProfComponent implements OnInit {

  loginError = false;
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {

    this.authService.loginProf(this.loginForm.value).subscribe(
      result => { },
      error => {
        this.loginError = true;
      },
    );
  }

  get loginFormControls() { return this.loginForm.controls; }

}
