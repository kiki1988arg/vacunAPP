import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  nextVaccines;
  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.facadeService.getNextVaccines("").subscribe((data) => this.nextVaccines = data);
  }

}