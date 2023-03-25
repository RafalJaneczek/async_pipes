import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AsyncPipeObservableComponent } from './async-pipe-observable/async-pipe-observable.component';
import { AsyncPipePromiseComponent } from './async-pipe-promise/async-pipe-promise.component';


@NgModule({
  declarations: [
    AppComponent,
    AsyncPipePromiseComponent,
    AsyncPipeObservableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
