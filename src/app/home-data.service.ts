import {Article} from "./article.model";
import {Subject} from "rxjs/index";

export class HomeDataService {
  article = new Subject();
  user = new Subject();
  qpaper = new Subject();
}
