import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
//import { Character } from 'src/app/models/character';
//import { CharacterService } from 'src/app/services/charcter.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display-characters',
  templateUrl: './display-characters.component.html',
  styleUrls: ['./display-characters.component.css']
})
export class DisplayCharactersComponent {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  allCharacters: Character[] = [];
  param: string = "";
  title: string = "All Novels";

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Characters");
  }


  ngOnInit(): void {

      /**
       * Retrieve products by category if category param is provided
       */
      if (this.activatedRoute.snapshot.queryParams['category']) {
        let category = this.activatedRoute.snapshot.queryParams['category'];
        console.log(category);
        this.titleService.setTitle(`${category} Novels`);
        this.title = `${category}`;

        this.characterService.getProductsByCategory(category).subscribe(
          (resp) => {
            hideLoader();
            this.allProducts = resp;
          },
          (err) => {
            console.log(err);
          },
          () => console.log("Characters Retrieved")
        );

      /**
       * Retrieve all novels if category params are not provided
       */
      } else {
        this.characterService.getProducts().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          (resp) => {
            hideLoader(); 
            this.allCharacters = resp
          },
          (err) => {
            console.log(err);
          },
          () => console.log("Characters Retrieved")
        );
      }
  }
}
