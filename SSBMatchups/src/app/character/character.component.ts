import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() name: string;
  @Output() characterSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCharacter() {
    this.characterSelected.emit(this.name);
  }

}
