import { PagesService, Page } from "./../pages.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chapter",
  templateUrl: "./chapter.component.html",
  styleUrls: ["./chapter.component.css"]
})
export class ChapterComponent implements OnInit {
  pages: Page[];
  ngOnInit(): void {}
  constructor(pagesService: PagesService) {
    this.pages = pagesService.getPages();
  }
}
