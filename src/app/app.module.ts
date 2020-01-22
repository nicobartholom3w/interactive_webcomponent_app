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
import { FormsModule } from '@angular/forms';
import { RandomSwitchesModule } from './challenges/random-switches/random-switches.module';
import { ProgressNavigationModule } from './challenges/progress-navigation/progress-navigation.module';
import { AutoTypeModule } from './challenges/auto-type/auto-type.module';
import { ThreeDCardModule } from './challenges/three-d-card/three-d-card.module';
import { ShowOnScrollModule } from './challenges/show-on-scroll/show-on-scroll.module';
import { SideMenuModule } from './challenges/side-menu/side-menu.module';
import { StickyModule } from './challenges/sticky/sticky.module';



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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
