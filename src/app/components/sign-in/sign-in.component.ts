import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FacadeService } from 'src/app/shared/services/facade.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  sendingInfo = false;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  filePath: string;
  file: File;
  url: ArrayBuffer | string;
  startDate = new Date(1992, 0, 1);
  user: User = new User();

  firstFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  secondFormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    NIF: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    bornDate: ['', [Validators.required]],
  })
  thirdFormGroup = this.fb.group({
    photoUrl: ['', [Validators.required]],
    acceptTerms: ['', [Validators.requiredTrue]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.file = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  onSubmit() {
    this.sendingInfo = true;
    // TODO: Use EventEmitter with form value   
    this.filePath = new Date().valueOf().toString();
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, this.file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((res) => {
          this.filePath = res;
          this.formSubmit()
        });
      })
    ).subscribe()
  }

  formSubmit() {
    this.user.name = this.secondFormControls.name.value;
    this.user.lastName = this.secondFormControls.lastName.value;
    this.user.NIF = this.secondFormControls.NIF.value;
    this.user.email = this.firstFormControls.email.value;
    this.user.password = this.firstFormControls.password.value;
    this.user.gender = this.secondFormControls.gender.value;
    this.user.BornDate = this.secondFormControls.bornDate.value;
    this.user.photoUrl = this.filePath;
    this.authService.signIn(this.user).subscribe(
      (res) => {
        this.router.navigateByUrl('/login');
        this._snackBar.open("Se ha registado exitosamente", "", {
          duration: 5000,
        });
      }, (err) => {
        this._snackBar.open("Lo siento hubo un error al registrarte, verificá tus datos e intentalo nuevamente", "ERROR", {
          duration: 5000,
        });
        this.sendingInfo = false
      });
  }
  // Graba archivo a firebase
  // const file = event.target.files[0];
  // const filePath = 'name-your-file-path-here';
  // const ref = this.storage.ref(filePath);
  // const task = ref.put(file);




  get firstFormControls() { return this.firstFormGroup.controls; }
  get secondFormControls() { return this.secondFormGroup.controls; }
  get thirdFormControls() { return this.thirdFormGroup.controls; }
}

