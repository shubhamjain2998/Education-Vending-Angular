import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/article.model';
import { User } from 'src/app/user.model';
import { AuthService } from 'src/app/auth.service';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import { DataStorageService } from 'src/app/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/comment.model';
import { ArticleService } from '../../article.service';


@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  selected = 0;
  hovered = 0;
  @Input() commentArticle: Article;
  @Input() user: User;
  @Input() editComment: boolean;
  @Input() editedComment: Comment;
  constructor(private authService: AuthService,
              private http: Http,
              private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const user = this.user.pk;
    const review = form.value.body;
    const rating = this.selected;

    const header = new Headers();
    const token = this.authService.token;
    header.append('Authorization',' JWT ' + token)
    const options = new RequestOptions({headers: header});
    
    if(!this.editComment){
      const article = this.commentArticle.pk;
      this.http.post('http://localhost:8000/api/portal/comment', {user, article, review, rating}, options)
      .subscribe(
        (response: Response) => {
          alert('Your Comment submitted successfully');
          this.dataStorageService.getComments();
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        (error: Error) => console.log(error)
      );
    }
    else {
      const article = this.articleService.getSpecificArticle(this.editedComment.article).pk;      
      this.http.put(this.editedComment.url, {user, article, review, rating}, options)
      .subscribe(
        (response: Response) => {
          alert('Edited Succesfully')
          this.dataStorageService.getComments();
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        (error: Error) => console.log(error)
      );
    }
  }
}
