import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-button',
  template: `
  <mat-icon (click)="onClose()" style="font-size:28px;float:right;cursor:pointer;">close</mat-icon>
  `,
  styles: [
  ]
})
export class CloseButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    this.router.navigate(['../']);
  }


}
