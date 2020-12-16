import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterSelectionComponent } from './multiple-character/multiple-character.component';
import { MainComponent } from './main/main.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterSelectionComponent,
    MainComponent,
    SingleCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
