import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article[];
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getComments();
  }
  }

