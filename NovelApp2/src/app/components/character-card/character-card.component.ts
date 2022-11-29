import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Character } from 'src/app/models/character';
//import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit{

  characters: {
    //character: Character,
  }[] = [];
  subscription!: Subscription;

  //@Input() characterInfo!: Character;

  //constructor(private characterService: CharacterService) { }
  
  ngOnInit(): void {
    
  }
}
