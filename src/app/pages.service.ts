import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PagesService {
  constructor() {}

  getPages(): Page[] {
    return [
      new Page(1, "./assets/storyboard-1.png"),
      new Page(2, "./assets/storyboard-2.png"),
      new Page(3, "./assets/storyboard-3.png"),
      new Page(4, "./assets/storyboard-4.png"),
      new Page(5, "./assets/storyboard-5.png"),
      new Page(6, "./assets/storyboard-6.png"),
      new Page(7, "./assets/storyboard-7.png")
    ];
  }
}

export class Page {
  /**
   *
   */
  constructor(number: number, link: string) {
    this.pageNumber = number;
    this.pageImageLink = link;
  }
  public pageNumber: number;
  public pageImageLink: string;
}
