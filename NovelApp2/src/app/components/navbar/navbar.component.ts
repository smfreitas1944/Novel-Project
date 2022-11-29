import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { NovelService } from 'src/app/services/novel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  subscription!: Subscription;

  //constructor(private activatedRoute: ActivatedRoute, private router: Router, private novelService: NovelService) { }
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {

  }

  retrieveByCategory(category: string) {

      this.router.navigate(['genre'], {
        queryParams: {
          category:`${category}`
        },
        skipLocationChange: false
      })
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
