import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewEncapsulation, Renderer2 } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectoryModule } from './directory/directory.module';
import { ChallengesModule } from './challenges/challenges.module';
import { StaticRadioButtonsModule } from './challenges/static-radio-buttons/static-radio-buttons.module';
import { TabIndexNavigationModule } from './challenges/tab-index-navigation/tab-index-navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandomSwitchesModule } from './challenges/random-switches/random-switches.module';
import { ProgressNavigationModule } from './challenges/progress-navigation/progress-navigation.module';
import { AutoTypeModule } from './challenges/auto-type/auto-type.module';
import { ThreeDCardModule } from './challenges/three-d-card/three-d-card.module';
import { ShowOnScrollModule } from './challenges/show-on-scroll/show-on-scroll.module';
import { SideMenuModule } from './challenges/side-menu/side-menu.module';
import { StickyModule } from './challenges/sticky/sticky.module';
import { DraggableCardModule } from './challenges/draggable-card/draggable-card.module';
import { CodeEntryModule } from './challenges/code-entry/code-entry.module';
import { MultiSelectModule } from './challenges/multi-select/multi-select.module';
import { CardSliderModule } from './challenges/card-slider/card-slider.module';
import { ValidationFormModule } from './challenges/validation-form/validation-form.module';
import { ColorPickerModule } from './challenges/color-picker/color-picker.module';
import { BoilingTimersModule } from './challenges/boiling-timers/boiling-timers.module';
import { CustomScrollModule } from './challenges/custom-scroll/custom-scroll.module';
import { VideoPlayerModule } from './challenges/video-player/video-player.module';
import { InputSliderComponent } from './challenges/input-slider/input-slider.component';
import { InputSliderModule } from './challenges/input-slider/input-slider.module';
import { AccordionModule } from './challenges/accordion/accordion.module';
import { TodoLocalStorageModule } from './challenges/todo-local-storage/todo-local-storage.module';
import { DotContainerModule } from './challenges/dot-container/dot-container.module';
import { WeeklyCalendarModule } from './challenges/weekly-calendar/weekly-calendar.module';
import { ToastModule } from './challenges/toast/toast.module';
import { PagingModule } from './challenges/paging/paging.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DirectoryModule,
    ChallengesModule,
    StaticRadioButtonsModule,
    TabIndexNavigationModule,
    RandomSwitchesModule,
    ProgressNavigationModule,
    AutoTypeModule,
    ThreeDCardModule,
    ShowOnScrollModule,
    SideMenuModule,
    StickyModule,
    DraggableCardModule,
    CodeEntryModule,
    MultiSelectModule,
    CardSliderModule,
    ValidationFormModule,
    ColorPickerModule,
    BoilingTimersModule,
    CustomScrollModule,
    VideoPlayerModule,
    InputSliderModule,
    AccordionModule,
    TodoLocalStorageModule,
    DotContainerModule,
    WeeklyCalendarModule,
    ToastModule,
    PagingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
