import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ArticleService} from "./article/article.service";

@Injectable()
export class DataStorageService {

  constructor (private http: Http,
               public articleService: ArticleService) {}

  getArticles() {
    this.http.get('http://localhost:8000/api/portal/article')
      .subscribe(
        (response: Response) => {
          const article = response.json();
          this.articleService.setArticles(article);
        },
        (error: Error) => console.log(error)
      );
  }
  getUsers() {
    this.http.get('http://localhost:8000/api/portal/user')
      .subscribe(
        (response: Response) => {
          const user = response.json();
          this.articleService.setUsers(user);
        },
        (error: Error) => console.log(error)
      );
  }
  getQpapers() {
    this.http.get('http://localhost:8000/api/portal/qp')
      .subscribe(
        (response: Response) => {
          const qpaper = response.json();
          this.articleService.setQpapers(qpaper);
        },
        (error: Error) => console.log(error)        
      );
  }
  getComments() {
    this.http.get('http://localhost:8000/api/portal/comment')
      .subscribe(
        (response: Response) => {
          const comment = response.json();
          this.articleService.setComments(comment);
        },
        (error: Error) => console.log(error)
      )
  }
}
