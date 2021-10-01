import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-content class="ion-padding">
        <p>
          Welcome to the circadian garden.
        </p>
        <a href="/garden/start">Enter the garden</a> or <a href="/about">learn more</a>.
      </ion-content>,
    ];
  }
}
