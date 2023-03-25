import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-pipe-observable',
  templateUrl: './async-pipe-observable.component.html',
  styleUrls: ['./async-pipe-observable.component.less']
})
export class AsyncPipeObservableComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  })
}
