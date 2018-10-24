import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {ArticleService} from "./article/article.service";
import {User} from "./user.model";

@Injectable()
export class AuthService {
  token: string;
  user: User;
  constructor (private http: Http,
               private router: Router,
               private articleService: ArticleService) {}

  signinUser(username: string, password: string) {
    // this.dataStorageService.getBookCategory();
    // this.dataStorageService.getBooks();
    return this.http.post('http://localhost:8000/api/token/', {'username': username, 'password': password})
      .subscribe(
        (response: Response) => {
          const obj = response.json();
          this.token = obj.token;
          if (this.token) {
            alert('logged in successfully');
            this.user = this.articleService.getUserByName(username);
            // this.router.navigate(['/books']);
          }
        },
        (error: Error) => {
          alert('Invalid Credentials');
          console.log(error);
        }
      );
  }
  signupUser(first_name: string, last_name: string, username: string, email: string, password: string) {
     return this.http.post('http://localhost:8000/api/portal/user', {'first_name': first_name, 'last_name': last_name, 'username': username, 'email': email, 'password': password});
  }
  getToken() {
    console.log(this.token);
    return this.token;
  }
  getUser(){
    return this.user;
  }
  isAuthenticated() {
    return this.token != null;
  }
  signOutUser() {
    this.token = null;
  }
}
