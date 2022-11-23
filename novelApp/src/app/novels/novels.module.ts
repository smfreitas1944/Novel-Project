import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNovelsComponent } from './list-novels/list-novels.component';



@NgModule({
  declarations: [
    ListNovelsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListNovelsComponent
  ]
})
export class NovelsModule { }
