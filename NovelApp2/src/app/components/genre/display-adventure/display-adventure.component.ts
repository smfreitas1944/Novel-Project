import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-adventure',
  templateUrl: './display-adventure.component.html',
  styleUrls: ['./display-adventure.component.css']
})
export class DisplayAdventureComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Adventure Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Adventure").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Products Retrieved")
    );
    
  }

}
