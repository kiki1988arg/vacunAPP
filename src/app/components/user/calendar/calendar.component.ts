import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { groupBy, toArray } from 'lodash-es';
import { FacadeService } from 'src/app/shared/services/facade.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  nextVaccines;
  floatLabelControl = new FormControl('3');
  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.facadeService.getNextVaccines(this.floatLabelControl.value).subscribe(
      (data) => {
        this.nextVaccines = toArray(groupBy(data, 'nif'))
      }
    );
  }

  changeMonth(event) {
    this.facadeService.getNextVaccines(this.floatLabelControl.value).subscribe(
      (data) => {
        this.nextVaccines = toArray(groupBy(data, 'nif'))
      }
    );
  }

}
