import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNovelsComponent } from './novels/list-novels/list-novels.component';

const routes: Routes = [{ path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },

{path: 'novels', component:ListNovelsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
