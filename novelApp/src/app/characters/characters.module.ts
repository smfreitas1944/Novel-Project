import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DeleteCharacterComponent } from './delete-character/delete-character.component';
import { ViewAllCharactersComponent } from './view-all-characters/view-all-characters.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { ViewCharacterByNovelComponent } from './view-character-by-novel/view-character-by-novel.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';


@NgModule({
  declarations: [
    CharactersComponent,
    AddCharacterComponent,
    DeleteCharacterComponent,
    ViewAllCharactersComponent,
    ViewCharacterComponent,
    ViewCharacterByNovelComponent,
    UpdateCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
