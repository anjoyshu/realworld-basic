import { ArticlesService } from './articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  list: any[] = [];

  constructor(public articlesService: ArticlesService) {
    //this.list = this.articlesService.list;
  }

  ngOnInit(): void {
    this.articlesService.getArticles()
    .subscribe(articles => {
      this.list = articles;
    });
  }

}
