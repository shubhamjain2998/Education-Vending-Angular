import { Component, OnInit } from '@angular/core';
import {Article} from "../../article.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ArticleService} from "../article.service";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {AuthService} from "../../auth.service";
import {User} from "../../user.model";
import { Comment } from 'src/app/comment.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
   article: Article;
   id: number;
   user: User;
   activeUser: User;
   editMode: boolean;
   comments: Comment[];
   newComment: boolean = true;
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private http: Http,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.article = this.articleService.getArticle(this.id);
        }
      );
    this.user = this.articleService.getUser(+(this.article.user));
    this.activeUser = this.authService.getUser();
    this.comments = this.articleService.getCommentsByArticle(this.article.pk);
    for (let comment of this.comments) {
      if (comment.user === this.activeUser.pk) {
        this.newComment = false;
      }
    }
    if (this.user.pk === this.activeUser.pk) {
      this.editMode = true;
    }
  }
  onDelete() {
    const header = new Headers();
    const token = this.authService.token;
    // console.log(token);
    header.append('Authorization',' JWT ' + token);
    const options = new RequestOptions({headers: header});
    this.http.delete(this.article.url, options)
      .subscribe(
        (response: Response) => {
          alert('Sucessfully Deleted');
          this.router.navigate(['/home'])
        },
            (error: Error) => console.log(error)
      );
  }
  onEdit() {
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
  onBack() {
    this.router.navigate(['../'],{relativeTo: this.route})
  }


}
