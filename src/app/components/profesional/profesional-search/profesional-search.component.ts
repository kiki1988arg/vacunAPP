import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/shared/interfaces/interfaces';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-profesional-search',
  templateUrl: './profesional-search.component.html',
  styleUrls: ['./profesional-search.component.scss']
})
export class ProfesionalSearchComponent implements OnInit {

  nif = new FormControl('', Validators.required);
  person: Person = {} as Person;
  errorNif = "";


  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
  }

  search() {
    this.facadeService.SearchPerson(this.nif.value).subscribe(
      res => { this.person = res },
      err => {
        this.person = {} as Person
      }

    );
  }

}
