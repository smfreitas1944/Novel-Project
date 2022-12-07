import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Novel } from 'src/app//models/novels';
import { NovelService } from 'src/app/services/novel.service';
import { Observable } from 'rxjs';
import { NovelDetailsComponent } from '../novel-details/novel-details.component';

@Component({
  selector: 'app-display-novels',
  templateUrl: './display-novels.component.html',
  styleUrls: ['./display-novels.component.css']
})
export class DisplayNovelsComponent implements OnInit {
  novels: Observable<Novel[]>;

  constructor(private novelService: NovelService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.novels = this.novelService.getNovelsList();
    }

    deleteNovel(novelname: string) {
      this.novelService.deleteNovel(novelname).subscribe(
        data => {
          console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }

    novelDetails(novelname: string) {
      this.router.navigate(['details', novelname]);
    }
  }
