import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-fantasy',
  templateUrl: './display-fantasy.component.html',
  styleUrls: ['./display-fantasy.component.css']
})
export class DisplayFantasyComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Fantasy Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Fantasy").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Fantasy Retrieved")
    );
    
  }

}
