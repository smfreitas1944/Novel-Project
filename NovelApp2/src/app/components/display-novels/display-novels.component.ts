import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
//import { Novel } from 'src/app/models/novel';
//import { NovelService } from 'src/app/services/novel.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display-novels',
  templateUrl: './display-novels.component.html',
  styleUrls: ['./display-novels.component.css']
})
export class DisplayNovelsComponent {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  allNovels: Novel[] = [];
  param: string = "";
  title: string = "All Novels";

  constructor(private novelService: NovelService, private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Novels");
  }


  ngOnInit(): void {

      /**
       * Retrieve products by category if category param is provided
       */
      if (this.activatedRoute.snapshot.queryParams['category']) {
        let category = this.activatedRoute.snapshot.queryParams['category'];
        console.log(category);
        this.titleService.setTitle(`${category} Novels`);
        this.title = `${category}`;

        this.productService.getProductsByCategory(category).subscribe(
          (resp) => {
            hideLoader();
            this.allProducts = resp;
          },
          (err) => {
            console.log(err);
          },
          () => console.log("Novels Retrieved")
        );

      /**
       * Retrieve all novels if category params are not provided
       */
      } else {
        this.productService.getProducts().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          (resp) => {
            hideLoader(); 
            this.allProducts = resp
          },
          (err) => {
            console.log(err);
          },
          () => console.log("Novels Retrieved")
        );
      }
  }
}
