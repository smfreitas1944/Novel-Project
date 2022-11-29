import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-horror',
  templateUrl: './display-horror.component.html',
  styleUrls: ['./display-horror.component.css']
})
export class DisplayHorrorComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Horror Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Horror").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Novels Retrieved")
    );
    
  }

}
