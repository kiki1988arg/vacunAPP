import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-notebook-dialog',
  templateUrl: './confirm-notebook-dialog.component.html',
  styleUrls: ['./confirm-notebook-dialog.component.scss']
})
export class ConfirmNotebookDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmNotebookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public vaccine: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
