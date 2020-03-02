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
import { CodeEntryComponent } from './challenges/code-entry/code-entry.component';
import { MultiSelectComponent } from './challenges/multi-select/multi-select.component';
import { CardSliderComponent } from './challenges/card-slider/card-slider.component';
import { ValidationFormComponent } from './challenges/validation-form/validation-form.component';
import { ColorPickerComponent } from './challenges/color-picker/color-picker.component';
import { BoilingTimersComponent } from './challenges/boiling-timers/boiling-timers.component';
import { CustomScrollModule } from './challenges/custom-scroll/custom-scroll.module';
import { CustomScrollComponent } from './challenges/custom-scroll/custom-scroll.component';


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
      },
      {
        path: 'code-entry',
        component: CodeEntryComponent
      },
      {
        path: 'multi-select',
        component: MultiSelectComponent
      },
      {
        path: 'card-slider',
        component: CardSliderComponent
      },
      {
        path: 'validation-form',
        component: ValidationFormComponent
      },
      {
        path: 'color-picker',
        component: ColorPickerComponent
      },
      {
        path: 'boiling-timers',
        component: BoilingTimersComponent
      },
      {
        path: 'custom-scroll',
        component: CustomScrollComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
