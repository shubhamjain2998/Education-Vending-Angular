import { Component, OnInit, Input } from '@angular/core';
import { Qpaper } from '../../../qpaper.model';

@Component({
  selector: 'app-qpaper-item',
  templateUrl: './qpaper-item.component.html',
  styleUrls: ['./qpaper-item.component.css']
})
export class QpaperItemComponent implements OnInit {
  @Input() index: number;
  @Input() qpaper: Qpaper;
  constructor() { }

  ngOnInit() { 
  }

}
