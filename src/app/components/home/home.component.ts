import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faFlag = faFlag;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
