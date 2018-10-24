import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "./data-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BITR';
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    // this.dataStorageService.getArticles();
    this.dataStorageService.getUsers();
  }
}
