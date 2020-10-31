import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-notebook-create',
  templateUrl: './notebook-create.component.html',
  styleUrls: ['./notebook-create.component.scss']
})
export class NotebookCreateComponent {

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    NIF: ['', [Validators.required]],
    bornDate: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private facade: FacadeService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.createForm.invalid) return;
    this.facade.createUser(this.createForm.value).subscribe(() => {
      this.router.navigate(['user/notebook']);
    });
  }

}
