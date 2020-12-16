import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  @Input() character: string;
  @Input() otherCharacters: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
