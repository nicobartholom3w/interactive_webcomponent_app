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
import { CustomScrollComponent } from './challenges/custom-scroll/custom-scroll.component';
import { VideoPlayerComponent } from './challenges/video-player/video-player.component';
import { InputSliderComponent } from './challenges/input-slider/input-slider.component';
import { AccordionComponent } from './challenges/accordion/accordion.component';
import { TodoLocalStorageComponent } from './challenges/todo-local-storage/todo-local-storage.component';
import { DotContainerComponent } from './challenges/dot-container/dot-container.component';
import { WeeklyCalendarComponent } from './challenges/weekly-calendar/weekly-calendar.component';
import { ToastComponent } from './challenges/toast/toast.component';
import { PagingComponent } from './challenges/paging/paging.component';
import { OnboardingComponent } from './challenges/onboarding/onboarding.component';
import { RippleCursorComponent } from './challenges/ripple-cursor/ripple-cursor.component';
import { PokeSuggestComponent } from './challenges/poke-suggest/poke-suggest.component';
import { HighlightHashtagsComponent } from './challenges/highlight-hashtags/highlight-hashtags.component';
import { ImageZoomComponent } from './challenges/image-zoom/image-zoom.component';


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
      },
      {
        path: 'video-player',
        component: VideoPlayerComponent
      },
      {
        path: 'input-slider',
        component: InputSliderComponent
      },
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'todo-local-storage',
        component: TodoLocalStorageComponent
      },
      {
        path: 'dot-container',
        component: DotContainerComponent
      },
      {
        path: 'weekly-calendar',
        component: WeeklyCalendarComponent
      },
      {
        path: 'toast',
        component: ToastComponent
      },
      {
        path: 'paging',
        component: PagingComponent
      },
      {
        path: 'onboarding',
        component: OnboardingComponent
      },
      {
        path: 'ripple-cursor',
        component: RippleCursorComponent
      },
      {
        path: 'poke-suggest',
        component: PokeSuggestComponent
      },
      {
        path: 'highlight-hashtags',
        component: HighlightHashtagsComponent
      },
      {
        path: 'image-zoom',
        component: ImageZoomComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
