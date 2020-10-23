import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notebook-create',
  templateUrl: './notebook-create.component.html',
  styleUrls: ['./notebook-create.component.scss']
})
export class NotebookCreateComponent implements OnInit {

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    bornDate: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
