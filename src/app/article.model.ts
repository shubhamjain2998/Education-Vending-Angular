export class Article {
  constructor (public url: string, public pk: number, public user: number, public title: string,
               public body: string, public img: string, public date: string, public status: boolean) {}
}
