import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CheckForUpdateService } from './shared/services/check-for-update.service';
import { Location } from '@angular/common';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showPreviousButton = false;
  updateAvailable = false;
  constructor(
    private updates: SwUpdate,
    private checkForUpdateService: CheckForUpdateService,
    private location: Location,
    private router: Router
  ) {
    this.updates.available.subscribe((event) => {
      this.updateAvailable = true;
    });
  }
  ngOnInit(): void {
    this.router.events.subscribe((routeValue: NavigationEnd) => {
      if (routeValue instanceof NavigationEnd)
        this.showPreviousButton = routeValue.url != '/' ? true : false;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  updateToLatest(): void {
    console.log('Updating to latest version.');
    this.updates.activateUpdate().then(() => document.location.reload());
  }
  previousUrl() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
