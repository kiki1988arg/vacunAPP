import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showPreviousButton = false;
  constructor(private location: Location, private router: Router, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  previousUrl() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  logout() {
    this.auth.signOut();
  }
}
