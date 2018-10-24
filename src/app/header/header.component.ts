import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth.service";
import {Response} from "@angular/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  closeResult: string;
  user: User;
  modelref: any;
  constructor(private modalService: NgbModal,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modelref = this.modalService.open(content, {backdropClass: 'opaque-backdrop'});
  }
  onSignup (form: NgForm) {
    console.log(form);
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
      this.authService.signupUser(firstname, lastname, username, email, password)
        .subscribe(
          (response: Response) => {
            console.log(response);
            alert('Registered Successfully');
            this.router.navigate(['/home']);
          },
          (error: Error) => console.log(error)
        );
    }
  onLogout() {
    this.authService.signOutUser();
    alert('Logged out successfully');
    this.router.navigate(['/home']);
  }
  check() {
    if (!this.authService.isAuthenticated()) {
      alert('Log in to access this link');
    }
  }
}
