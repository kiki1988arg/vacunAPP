import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faFlag = faFlag;
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faEnvelopeSquare = faEnvelopeSquare;
  constructor(public authService: AuthService) { }

  ngOnInit(): void { }
}
