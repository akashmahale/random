import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from 'src/pages/random/random.component';
import { MalGrabComponent } from 'src/pages/mal-grab/mal-grab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/random',
    pathMatch: 'full',
  },
  {
    path: 'random',
    component: RandomComponent
  },
  {
    path: 'mal',
    component: MalGrabComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
