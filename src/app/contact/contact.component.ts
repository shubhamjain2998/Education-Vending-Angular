import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../article/article.service';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService,
              private http: Http,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  onSubmit(form: NgForm){
    const header = new Headers();
    const token = this.authService.token;
    header.append('Authorization',' JWT ' + token);
    const options = new RequestOptions({headers: header});

    const user = this.user.pk;
    const email = form.value.email;
    const title = form.value.title;
    const body = form.value.body;

    this.http.post('http://localhost:8000/api/portal/feedback', {user, email, title, body}, options)
      .subscribe(
        (response: Response) => {
          alert('Feedback submitted Successfully');
          this.router.navigate(['home']);
        },
        (error: Error) => console.log(error)
      );
  }
}
