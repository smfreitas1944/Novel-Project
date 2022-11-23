import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharactersComponent } from './characters.component';
import { DeleteCharacterComponent } from './delete-character/delete-character.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { ViewAllCharactersComponent } from './view-all-characters/view-all-characters.component';
import { ViewCharacterByNovelComponent } from './view-character-by-novel/view-character-by-novel.component';
import { ViewCharacterComponent } from './view-character/view-character.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: 'delete-character', component: DeleteCharacterComponent },
  { path: 'update-character', component: UpdateCharacterComponent },
  { path: 'view-all-characters', component: ViewAllCharactersComponent },
  { path: 'view-character', component: ViewCharacterComponent },
  { path: 'view-character-by-novel', component: ViewCharacterByNovelComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
