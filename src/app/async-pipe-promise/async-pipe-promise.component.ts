import { Component } from '@angular/core';

@Component({
  selector: 'app-async-pipe-promise-component',
  templateUrl: './async-pipe-promise.component.html',
  styleUrls: ['./async-pipe-promise.component.less']
})
export class AsyncPipePromiseComponent {
  logMessage: Promise<string> | null = null;
  arrived: boolean = false;
  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.logMessage = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    })
  }

  clicked() {
    if(this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

}
