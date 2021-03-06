import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmNotebookDialogComponent } from 'src/app/shared/components/confirm-notebook-dialog/confirm-notebook-dialog.component';
import { Person } from 'src/app/shared/interfaces/interfaces';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.scss']
})
export class NotebookDetailComponent implements OnInit {
  person: any = {} as any;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

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
        this.facade.AddSelfNotebook(vaccine).subscribe(() => this.loadPerson(this.person.nif))


      }
      console.log('The dialog was closed');
    });
  }



}
