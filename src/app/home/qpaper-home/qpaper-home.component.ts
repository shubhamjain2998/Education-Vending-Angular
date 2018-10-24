import {Component, Input, OnInit} from '@angular/core';
import {Qpaper} from "../../qpaper.model";

@Component({
  selector: 'app-qpaper-home',
  templateUrl: './qpaper-home.component.html',
  styleUrls: ['./qpaper-home.component.css']
})
export class QpaperHomeComponent implements OnInit {
  @Input() index: number;
  @Input() qpaper: Qpaper;
  constructor() { }

  ngOnInit() {
  }

}
