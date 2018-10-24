import {Injectable} from "@angular/core";
import {Article} from "../article.model";
import {Observable, Observer} from "rxjs/index";
import {HomeDataService} from "../home-data.service";
import {User} from "../user.model";
import { Qpaper } from "../qpaper.model";
import { Comment } from "../comment.model";

@Injectable()
export class ArticleService {
   articles: Article[];
   users: User[];
   qpapers: Qpaper[];
   comments: Comment[];
  constructor (private homeDataService: HomeDataService) {}

  setArticles(article: Article[]) {
    this.articles = article;
    this.homeDataService.article.next(this.articles);
    // console.log(this.articles);
  }
  getArticles() {
    return this.articles
  }
  getArticle(id: number) {
    return this.articles[id];
  }
  getSpecificArticle(pk: number) {
    for (let article of this.articles){
      if(article.pk === pk){
        return article;
      }
    }
  }
  setUsers(user: User[]){
    this.users = user;
    this.homeDataService.user.next(this.users);
  }
  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    for(let user of this.users){
      if(user.pk == id){
        return user;
      }
    }
  }
  getUserByName(username: string){
    for(let user of this.users){
      if(user.username === username){
        return user;
      }
    }
  }
  setQpapers(qpaper: Qpaper[]) {
    this.qpapers = qpaper;
    this.homeDataService.qpaper.next(this.qpapers);
  }
  getQpapers() {
    return this.qpapers;
  }
  setComments(comment: Comment[]) {
    this.comments = comment;
  }
  getCommentsByArticle(article: number) {
    let ArticleComments: Comment[] = [];
    for (let comment of this.comments) {
      if (comment.article === article){
        ArticleComments.push(comment);
      }
    }
    return ArticleComments.slice();   
  }
}
