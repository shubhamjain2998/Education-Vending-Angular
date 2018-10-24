import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {AuthService} from "../../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  file: File = null;
  user: User;
  constructor(private http: Http,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  onFileChanged(event) {
    this.file = <File>event.target.files[0]
  }
  Modify(form: NgForm) {
    const header = new Headers();
    const token = this.authService.token;
    // console.log(token);
    header.append('Authorization',' JWT ' + token);
    header.append('Content-Disposition', 'form-data');
    console.log(form);
    const user = this.user.pk.toString();
    const title = form.value.title;
    const body = form.value.body;
    let imgname: string;
    if(this.file==null){
      imgname = null;
    } else {
      imgname = this.file.name;
    }
    let formData = new FormData();
    formData.append('user', user);
    formData.append('title', title);
    formData.append('body', body);
    formData.append('img', this.file, imgname);
    const options = new RequestOptions({headers: header});
    this.http.post('http://localhost:8000/api/portal/article', formData, options)
      .subscribe(
        (response: Response) => {
          console.log(response);
          alert('Article submitted successfully');
          this.router.navigate(['../'],{relativeTo: this.route})
        },
        (error: Error) => {
          alert('Session Expired! Login again');
          console.log(error)
        }
      );
  }
  onCancel() {
    this.router.navigate(['../'],{relativeTo: this.route})
  }
}
