import { Component, OnInit } from '@angular/core';
import { Qpaper } from '../../qpaper.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-qpaper-list',
  templateUrl: './qpaper-list.component.html',
  styleUrls: ['./qpaper-list.component.css']
})
export class QpaperListComponent implements OnInit {
  currentJustify = "center";
  qpapers: Qpaper[];
  CseQp: Qpaper[] = [];
  MechQp: Qpaper[] = [];
  CivilQp: Qpaper[] = [];
  EeeQp: Qpaper[] = [];
  EtcQp: Qpaper[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.qpapers = this.articleService.getQpapers();
    for (let qp of this.qpapers) {
      if (qp.branch === "CSE") {
        this.CseQp.push(qp);
      }
      else if (qp.branch === "MECH") {
        this.MechQp.push(qp)
      }
      else if (qp.branch === "CIV") {
        this.CivilQp.push(qp);
      }
      else if (qp.branch === "EEE") {
        this.EeeQp.push(qp);
      }
      else {
        this.EtcQp.push(qp);
      } 
    }
  }

}
