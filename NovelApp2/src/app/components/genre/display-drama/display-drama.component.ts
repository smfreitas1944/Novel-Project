import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-display-drama',
  templateUrl: './display-drama.component.html',
  styleUrls: ['./display-drama.component.css']
})
export class DisplayDramaComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Drama Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Drama").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Novels Retrieved")
    );
    
  }

}
