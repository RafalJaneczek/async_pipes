import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeObservableComponent } from './async-pipe-observable/async-pipe-observable.component';
import { AsyncPipePromiseComponent } from './async-pipe-promise/async-pipe-promise.component';


const routes: Routes = [
  {path: 'async/promise', component: AsyncPipePromiseComponent},
  {path: 'async/observer', component: AsyncPipeObservableComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
