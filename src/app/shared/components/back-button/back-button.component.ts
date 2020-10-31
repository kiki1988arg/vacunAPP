import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <mat-icon (click)="onBack()" style="font-size:28px;cursor:pointer;">keyboard_backspace</mat-icon>

  `,
  styles: [
  ]
})
export class BackButtonComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onBack() {
    this.location.back();
  }

}
