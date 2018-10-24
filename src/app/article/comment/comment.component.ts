import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/comment.model';
import { User } from 'src/app/user.model';
import { AuthService } from 'src/app/auth.service';
import { ArticleService } from '../article.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() index: number;
  user: User;
  ArticleUser: User;
  editMode: Boolean = false;
  commentEdit: Boolean = false;
  constructor(private authService: AuthService,
              private articleService: ArticleService,
              private http: Http,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user.pk === this.comment.user) {
      this.editMode = true;
    }
    this.ArticleUser = this.articleService.getUser(+(this.comment.user))
  }
  onEdit() {
    this.commentEdit = !this.commentEdit;
  }
  onDelete() {
    const header = new Headers();
    const token = this.authService.token;
    header.append('Authorization',' JWT ' + token)
    const options = new RequestOptions({headers: header});

    this.http.delete(this.comment.url, options)
    .subscribe(
      (response: Response) => {
        this.dataStorageService.getComments();
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }
}
