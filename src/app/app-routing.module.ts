import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleListComponent} from "./article/article-list/article-list.component";
import {ArticleDetailComponent} from "./article/article-detail/article-detail.component";
import {NewArticleComponent} from "./article/new-article/new-article.component";
import {AuthGuard} from "./auth-guard.service";
import {ArticleEditComponent} from "./article/article-list/article-item/article-edit/article-edit.component";
import {QpaperComponent} from "./qpaper/qpaper.component";
import {QpaperListComponent} from "./qpaper/qpaper-list/qpaper-list.component"
import {QuizComponent} from "./quiz/quiz.component";
import {ContactComponent} from "./contact/contact.component";

const appRoute: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'article', component: ArticleComponent,canActivate: [AuthGuard], children: [
      {path: '', component: ArticleListComponent},
      {path: 'add', component: NewArticleComponent},
      {path: ':id', component: ArticleDetailComponent},
      {path: ':id/edit', component: ArticleEditComponent}
    ]},
  {path: 'qpaper', component: QpaperComponent, canActivate: [AuthGuard], children: [
    {path: '', component: QpaperListComponent},
  ]},
  {path: 'quiz', component: QuizComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
