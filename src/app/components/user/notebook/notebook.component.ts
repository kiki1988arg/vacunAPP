import { Component, OnInit } from '@angular/core';
import { Person, User } from 'src/app/shared/interfaces/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  me;
  persons: Person[] = [
  ];
  constructor(private authService: AuthService
    , private facade: FacadeService) { }

  ngOnInit(): void {
    this.me = this.authService.currentUserValue;
    this.facade.getPersons().subscribe(res => this.persons = res);
  }

}
