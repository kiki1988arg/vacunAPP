import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-notebook-dialog',
  templateUrl: './add-notebook-dialog.component.html',
  styleUrls: ['./add-notebook-dialog.component.scss']
})
export class AddNotebookDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddNotebookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public vaccine: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
