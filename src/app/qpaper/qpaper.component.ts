import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article/article.service';
import { Qpaper } from '../qpaper.model';

@Component({
  selector: 'app-qpaper',
  templateUrl: './qpaper.component.html',
  styleUrls: ['./qpaper.component.css']
})
export class QpaperComponent implements OnInit {
  height: number;
  qpaper: Qpaper[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  //   const getHeight = document.getElementById('background').clientHeight;
  //   if (getHeight < 900){
  //     this.height = 900;
  //   } else {
  //     this.height = getHeight;
  //   }
    this.qpaper = this.articleService.getQpapers();
    const count = this.qpaper.length;
    if((count<18 && window.outerWidth > 760) || (count<8 && window.outerWidth>580 && window.outerWidth<760) || (count<6 && window.outerWidth < 580)) {
      this.height = 800;
    }
  }
}
