import { ArticlesService } from './articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  list: any[];

  constructor(public ArticlesService: ArticlesService) {
    this.list = this.ArticlesService.list;
  }

}
