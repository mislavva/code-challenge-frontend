import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './animations/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']; // tslint:disable-line
  }
}
