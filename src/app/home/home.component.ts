import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../data-storage.service";
import {ArticleService} from "../article/article.service";
import {Http, Response} from "@angular/http";
import {Article} from "../article.model";
import {Qpaper} from "../qpaper.model";
import {Observable, Observer} from "rxjs/index";
import {HomeDataService} from "../home-data.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  users: User[];
  user: User;
  qpapers: Qpaper[];
  showNavigationArrows = false;
  constructor(private articleService: ArticleService,
              private http: Http,
              private homeDataService: HomeDataService,
              private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
    this.dataStorageService.getArticles();
    this.dataStorageService.getQpapers();
    // this.dataStorageService.getUsers();
    this.homeDataService.article.subscribe(
      (finalArticles: Article[]) => {
        let i = 0;
        for (let artTest of finalArticles) {
          if (!artTest.status) {
            finalArticles.splice(i, 1);
          }
          i++;
        }
        this.articles = finalArticles.slice(0, 3);
      }
    );

    this.homeDataService.user.subscribe(
      (finalUsers: User[]) => {
        this.users = finalUsers;
      }
    );

    this.homeDataService.qpaper.subscribe(
      (finalQp: Qpaper[]) => {
        this.qpapers = finalQp.slice(0,4);
      }
    );
  }
  onSignIn(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signinUser(username, password);
    this.user = this.authService.getUser();
    form.reset();
  }

}
