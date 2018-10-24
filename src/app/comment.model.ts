export class Comment {
    constructor (public url: string, public pk: number, public user: number, public article: number, public review: string,
                 public rating: number, public date: string) {}
}