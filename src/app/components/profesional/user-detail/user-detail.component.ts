import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmNotebookDialogComponent } from 'src/app/shared/components/confirm-notebook-dialog/confirm-notebook-dialog.component';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  person: any = {} as any;

  constructor(private facade: FacadeService
    , private activatedRoute: ActivatedRoute
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.person.id = this.activatedRoute.snapshot.params.Id;
    this.loadPerson(this.person.id);

  }
  loadPerson(id) {
    this.facade.getPersonById(id).subscribe(res => {
      this.person = res;
    })
  }

  addNotebook(vaccine): void {
    const dialogRef = this.dialog.open(ConfirmNotebookDialogComponent, {
      width: '360px',
      data: vaccine
    });

    dialogRef.afterClosed().subscribe(vaccine => {
      if (vaccine) {
        vaccine.nif = this.person.nif;
        vaccine.VaccineId = vaccine.id;
        this.facade.AddNotebook(vaccine).subscribe(() => this.loadPerson(this.person.nif))


      }
      console.log('The dialog was closed');
    });
  }

  updateNotebook(vaccine): void {
    const dialogRef = this.dialog.open(ConfirmNotebookDialogComponent, {
      width: '360px',
      data: vaccine
    });

    dialogRef.afterClosed().subscribe(notebook => {
      if (notebook) {
        vaccine.nif = this.person.nif;
        vaccine.VaccineId = notebook.id;
        this.facade.updateNotebook(vaccine).subscribe(() => this.loadPerson(this.person.nif))


      }
      console.log('The dialog was closed');
    });
  }

}
