import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryModule } from './directory/directory.module';
import { DirectoryComponent } from './directory/directory/directory.component';
import { ChallengesComponent } from './challenges/challenges/challenges.component';
import { StaticRadioButtonsComponent } from './challenges/static-radio-buttons/static-radio-buttons/static-radio-buttons.component';
import { TabIndexNavigationComponent } from './challenges/tab-index-navigation/tab-index-navigation.component';
import { RandomSwitchesComponent } from './challenges/random-switches/random-switches.component';


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
    component: ChallengesComponent,
    children: [
      {
        path: 'static-radio-buttons',
        component: StaticRadioButtonsComponent
      },
      {
        path: 'tab-index-navigation',
        component: TabIndexNavigationComponent
      },
      {
        path: 'random-switches',
        component: RandomSwitchesComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
