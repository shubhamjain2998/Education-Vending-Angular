import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleItemComponent } from './article/article-list/article-item/article-item.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import {DataStorageService} from "./data-storage.service";
import {HttpClientModule} from "@angular/common/http";
import {ArticleService} from "./article/article.service";
import {AppRoutingModule} from "./app-routing.module";
import { ArticleCarouselComponent } from './home/article-carousel/article-carousel.component';
import { QpaperHomeComponent } from './home/qpaper-home/qpaper-home.component';
import {HomeDataService} from "./home-data.service";
import { NewArticleComponent } from './article/new-article/new-article.component';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import { ArticleEditComponent } from './article/article-list/article-item/article-edit/article-edit.component';
import { QpaperComponent } from './qpaper/qpaper.component';
import { QuizComponent } from './quiz/quiz.component';
import { ContactComponent } from './contact/contact.component';
import { QpaperListComponent } from './qpaper/qpaper-list/qpaper-list.component';
import { QpaperItemComponent } from './qpaper/qpaper-list/qpaper-item/qpaper-item.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './article/comment/comment.component';
import { CommentEditComponent } from './article/comment/comment-edit/comment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    ArticleCarouselComponent,
    QpaperHomeComponent,
    NewArticleComponent,
    ArticleEditComponent,
    QpaperComponent,
    QuizComponent,
    ContactComponent,
    QpaperListComponent,
    QpaperItemComponent,
    FooterComponent,
    CommentComponent,
    CommentEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [DataStorageService, ArticleService, HomeDataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
