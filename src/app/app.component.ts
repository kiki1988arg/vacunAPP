import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CheckForUpdateService } from './shared/services/check-for-update.service';
import {
  RouterOutlet,
} from '@angular/router';
import { slideInAnimation } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {

  updateAvailable = false;
  constructor(
    private updates: SwUpdate,
    private checkForUpdateService: CheckForUpdateService
  ) {
    this.updates.available.subscribe((event) => {
      this.updateAvailable = true;
    });
  }
  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  updateToLatest(): void {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
