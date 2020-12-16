import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { CharacterSelectionComponent } from '../multiple-character/multiple-character.component';

enum AppState {
  Initial,
  MultipleCharacter,
  SingleCharacter,
  Stats
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  state: AppState;
  selectedCharacter: string;

  constructor() { }

  ngOnInit(): void {
    this.state = AppState.Initial;
  }

  goToInitial(): void {
    this.state = AppState.Initial;
  }

  atInitial(): boolean {
    return this.state == AppState.Initial;
  }

  goToMultipleCharacter(): void {
    this.state = AppState.MultipleCharacter;
  }

  atMultipleCharacter(): boolean {
    return this.state === AppState.MultipleCharacter;
  }

  goToSingleCharacter(character: string): void {
    this.selectedCharacter = character;
    this.state = AppState.SingleCharacter;
  }

  atSingleCharacter(): boolean {
    return this.state === AppState.SingleCharacter;
  }

  goToStats(): void {
    this.state = AppState.Stats;
  }

  atStats(): boolean {
    return this.state === AppState.Stats;
  }

  onSelectedCharacter(event): void {
    this.goToSingleCharacter(event);
  }
}
