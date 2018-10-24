import { Component, OnInit } from '@angular/core';
import {Article} from "../../article.model";
import {ArticleService} from "../article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  height: number;
  articles: Article[];
  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    // console.log(this.articles);
    const count = this.articles.length;
    if ((count<=6 && window.outerWidth > 760) || (count<=6 && window.outerWidth>580 && window.outerWidth<760) || (count<=6 && window.outerWidth < 580)) {
      this.height = 900; 
    }
  }
  Add() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

}
