import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/interfaces/interfaces';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.scss']
})
export class NotebookDetailComponent implements OnInit {
  person: Person = {} as Person;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private facade: FacadeService
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.person.Id = +this.activatedRoute.snapshot.params.Id;
    this.facade.getPersonById(this.person.Id).subscribe(res => {
      this.person = res;
    })

  }

}