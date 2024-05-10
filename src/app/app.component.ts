import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
