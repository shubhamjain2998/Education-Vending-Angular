import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../article.model";
import {User} from "../../../user.model";
import {ArticleService} from "../../article.service";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
