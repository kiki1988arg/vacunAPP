import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/shared/interfaces/interfaces';
import { FacadeService } from 'src/app/shared/services/facade.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent implements OnInit {

  vaccineList: Vaccine[];
  constructor(private facade: FacadeService, private location: Location) { }

  ngOnInit(): void {
    this.facade.getVacinnes().subscribe(res => {
      this.vaccineList = res;
    })
  }

  close() { this.location.back(); }

}
