import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-character',
  templateUrl: './multiple-character.component.html',
  styleUrls: ['./multiple-character.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  @Output() selectedCharacter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedCharacter(character: string) {
    this.selectedCharacter.emit(character);
  }
}
