import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ArticleService} from "../../../article.service";
import {Article} from "../../../../article.model";
import {NgForm} from "@angular/forms";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {AuthService} from "../../../../auth.service";
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
   id: number;
   article: Article;
   file: File = null;
   user: User;
   @ViewChild('f') editform: NgForm;
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private authService: AuthService,
              private http: Http,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    
  }

  initForm() {
    this.article = this.articleService.getArticle(this.id);
    this.editform.form.patchValue({
      title: this.article.title,
      body: this.article.body
    });
    this.user = this.authService.getUser();
  }
  onFileChanged(event) {
    this.file = <File>event.target.files[0]
  }
  onSubmit(form: NgForm){
    let imgname: string;
    if(this.file==null){
      imgname = null;
    } else {
      imgname = this.file.name;
    }
    const header = new Headers();
    const token = this.authService.token;
    // console.log(token);
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Authorization',' JWT ' + token);
    header.append('Content-Disposition', 'form-data');
    const user = this.user.pk.toString();
    const title = form.value.title;
    const body = form.value.body;
    let formData = new FormData();
    formData.append('user', user);
    formData.append('title', title);
    formData.append('body', body);
    formData.append('img', this.file, imgname);
    const options = new RequestOptions({headers: header});
    this.http.put(this.article.url, formData, options)
      .subscribe(
        (response: Response) => console.log(response),
        (error: Error) => {
          alert('Session Expired! Login again');
          console.log(error)
        },
        () => {
          alert('Form submitted successfully');
          this.router.navigate(['home'])
        }
      );
    // console.log(form);
    // console.log(this.file);
  }
  onCancel() {
    this.editform.reset();
    this.router.navigate(['../'],{relativeTo: this.route})
  }
}
