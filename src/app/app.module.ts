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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
