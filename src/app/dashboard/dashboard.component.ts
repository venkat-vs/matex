import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routeTransitionAnimations} from '../shared/constants/routes-slide-animation';
import {isPlatformBrowser} from '@angular/common';
import {BackToMaterialService} from '../shared/services/back-to-material.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    routeTransitionAnimations
    // animation triggers go here
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(APP_ID) private appId: string,
    private spinner: BackToMaterialService
  ) {
  }

  ngOnInit() {
    this.spinner.startSpinner();
  }

  /**
   * {prepareRoute} Trigger the animated route
   * check for a route with data for the state specified property, animationState.
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState;
  }

  /**
   * {onActivate} Trigger route to scroll to top on change of routes each time
   *
   */

  onActivate() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
