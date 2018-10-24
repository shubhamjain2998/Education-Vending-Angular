import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../article.model";
import {User} from "../../user.model";
import {ArticleService} from "../../article/article.service";

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article-carousel.component.css']
})
export class ArticleCarouselComponent implements OnInit {
  @Input() index: number;
  @Input() article: Article;
  user: User;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.user = this.articleService.getUser(+(this.article.user));
    // console.log(this.user.first_name);
  }

}
