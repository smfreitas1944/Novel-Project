import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Novel } from 'src/app/models/novels';
import { NovelService } from 'src/app/services/novel.service';

@Component({
  selector: 'app-novel-details',
  templateUrl: './novel-details.component.html',
  styleUrls: ['./novel-details.component.css']
})
export class NovelDetailsComponent implements OnInit{

  novel_id: number;
  novel: Novel;

  constructor(private route: ActivatedRoute,private router: Router,
    private novelService: NovelService) { }

  ngOnInit() {
    this.novel = new Novel();

    this.novel_id = this.route.snapshot.params['novel_id'];
    
    this.novelService.getNovel(this.novel_id)
      .subscribe(data => {
        console.log(data)
        this.novel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['novels']);
  }
}
