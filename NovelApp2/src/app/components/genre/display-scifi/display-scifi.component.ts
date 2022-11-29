import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-scifi',
  templateUrl: './display-scifi.component.html',
  styleUrls: ['./display-scifi.component.css']
})
export class DisplayScifiComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Sci-Fi Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Scifi").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Novels Retrieved")
    );
    
  }

}
