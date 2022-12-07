import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NovelCardComponent } from './components/novel-card/novel-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { DisplayNovelsComponent } from './components/display-novels/display-novels.component';
import { DisplayCharactersComponent } from './components/display-characters/display-characters.component';
import { AddCharactersComponent } from './components/characters/add-characters/add-characters.component';
import { UpdateCharactersComponent } from './components/characters/update-characters/update-characters.component';
import { DeleteCharactersComponent } from './components/characters/delete-characters/delete-characters.component';
import { AddCharacterComponent } from './components/novels/add-character/add-character.component';
import { AddNovelComponent } from './components/novels/add-novel/add-novel.component';
import { UpdateNovelComponent } from './components/novels/update-novel/update-novel.component';
import { DeleteNovelComponent } from './components/novels/delete-novel/delete-novel.component';
import { GenreComponent } from './components/genre/genre.component';
import { DisplayFantasyComponent } from './components/genre/display-fantasy/display-fantasy.component';
import { DisplayMysteryComponent } from './components/genre/display-mystery/display-mystery.component';
import { DisplayHorrorComponent } from './components/genre/display-horror/display-horror.component';
import { DisplayAdventureComponent } from './components/genre/display-adventure/display-adventure.component';
import { DisplayRomanceComponent } from './components/genre/display-romance/display-romance.component';
import { DisplayScifiComponent } from './components/genre/display-scifi/display-scifi.component';
import { DisplayDramaComponent } from './components/genre/display-drama/display-drama.component';
import { NovelDetailsComponent } from './components/novel-details/novel-details.component';
import { CreateNovelComponent } from './components/create-novel/create-novel.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NovelCardComponent,
    CharacterCardComponent,
    DisplayNovelsComponent,
    DisplayCharactersComponent,
    AddCharactersComponent,
    UpdateCharactersComponent,
    DeleteCharactersComponent,
    AddCharacterComponent,
    AddNovelComponent,
    UpdateNovelComponent,
    DeleteNovelComponent,
    GenreComponent,
    DisplayFantasyComponent,
    DisplayMysteryComponent,
    DisplayHorrorComponent,
    DisplayAdventureComponent,
    DisplayRomanceComponent,
    DisplayScifiComponent,
    DisplayDramaComponent,
    NovelDetailsComponent,
    CreateNovelComponent,
    CreateCharacterComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
