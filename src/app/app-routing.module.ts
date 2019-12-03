import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryModule } from './directory/directory.module';
import { DirectoryComponent } from './directory/directory/directory.component';
import { ChallengesComponent } from './challenges/challenges/challenges.component';


const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
