import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';

@Component({
  selector: 'app-novel-card',
  templateUrl: './novel-card.component.html',
  styleUrls: ['./novel-card.component.css']
})
export class NovelCardComponent implements OnInit{

  novels: {
    //novel: Novel,
  }[] = [];
  subscription!: Subscription;

  //@Input() novelInfo!: Novel;

  //constructor(private novelService: NovelService) { }
  
  ngOnInit(): void {
    
  }
}
