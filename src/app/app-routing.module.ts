import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory/directory.component';
import { ChallengesComponent } from './challenges/challenges/challenges.component';
import { StaticRadioButtonsComponent } from './challenges/static-radio-buttons/static-radio-buttons/static-radio-buttons.component';
import { TabIndexNavigationComponent } from './challenges/tab-index-navigation/tab-index-navigation.component';
import { RandomSwitchesComponent } from './challenges/random-switches/random-switches.component';
import { ProgressNavigationComponent } from './challenges/progress-navigation/progress-navigation.component';
import { AutoTypeComponent } from './challenges/auto-type/auto-type.component';
import { ThreeDCardComponent } from './challenges/three-d-card/three-d-card.component';
import { ShowOnScrollComponent } from './challenges/show-on-scroll/show-on-scroll.component';
import { SideMenuComponent } from './challenges/side-menu/side-menu.component';
import { StickyComponent } from './challenges/sticky/sticky.component';
import { DraggableCardComponent } from './challenges/draggable-card/draggable-card.component';


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
      },
      {
        path: 'progress-navigation',
        component: ProgressNavigationComponent
      },
      {
        path: 'auto-type',
        component: AutoTypeComponent
      },
      {
        path: '3d-card',
        component: ThreeDCardComponent
      },
      {
        path: 'show-on-scroll',
        component: ShowOnScrollComponent
      },
      {
        path: 'side-menu',
        component: SideMenuComponent
      },
      {
        path: 'sticky',
        component: StickyComponent
      },
      {
        path: 'draggable-card',
        component: DraggableCardComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
