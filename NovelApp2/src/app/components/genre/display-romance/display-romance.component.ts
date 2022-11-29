import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-romance',
  templateUrl: './display-romance.component.html',
  styleUrls: ['./display-romance.component.css']
})
export class DisplayRomanceComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Romance Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Romance").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Novels Retrieved")
    );
    
  }

}
