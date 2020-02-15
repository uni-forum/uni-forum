import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'discussions',
    loadChildren: () => import('./discussions/discussions.module').then(m => m.DiscussionsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'discussions'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
