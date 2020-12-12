import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNotebookDialogComponent } from '../add-notebook-dialog/add-notebook-dialog.component';

@Component({
  selector: 'app-update-notebook-dialog',
  templateUrl: './update-notebook-dialog.component.html',
  styleUrls: ['./update-notebook-dialog.component.scss']
})
export class UpdateNotebookDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddNotebookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public vaccine: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
