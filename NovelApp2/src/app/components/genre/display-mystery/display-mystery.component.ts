import { Component, OnInit } from '@angular/core';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-mystery',
  templateUrl: './display-mystery.component.html',
  styleUrls: ['./display-mystery.component.css']
})
export class DisplayMysteryComponent implements OnInit{

  allProducts: Novel[] = [];

  constructor(private novelService: NovelService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Mystery Genre")
  }

  ngOnInit(): void {
    this.novelService.getProductsByCategory("Mystery").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
      },
      () => console.log("Novels Retrieved")
    );
    
  }

}
