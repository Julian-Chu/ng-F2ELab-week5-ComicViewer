import { PagesService, Page } from "./../pages.service";
import { Component, OnInit } from "@angular/core";
import { TouchSequence } from "selenium-webdriver";

@Component({
  selector: "app-chapter",
  templateUrl: "./chapter.component.html",
  styleUrls: ["./chapter.component.css"]
})
export class ChapterComponent implements OnInit {
  pages: Page[];
  currentPageNo: number;
  ngOnInit(): void {}
  constructor(pagesService: PagesService) {
    this.pages = pagesService.getPages();
    this.currentPageNo = 1;
  }

  nextPage() {
    if (this.currentPageNo + 1 > this.pages.length) {
      return;
    }
    this.currentPageNo += 1;
  }

  previousPage() {
    if (this.currentPageNo - 1 <= 0) {
      return;
    }
    this.currentPageNo -= 1;
  }
}
