import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() keywordChange = new EventEmitter<string>();

  keyword = '';

  constructor() { }

  ngOnInit(): void {
  }

  highlightTitle = false;
  fontSize = 24;

  search($event: MouseEvent) {
    this.keywordChange.emit(this.keyword);
  }

}
