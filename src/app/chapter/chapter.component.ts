import { DarkmodeService } from "./../darkmode.service";
import { PagesService, Page } from "./../pages.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chapter",
  templateUrl: "./chapter.component.html",
  styleUrls: ["./chapter.component.css"]
})
export class ChapterComponent implements OnInit {
  pages: Page[];
  currentPageNo: number;
  darkMode: boolean;
  constructor(
    pagesService: PagesService,
    private darkModeService: DarkmodeService
  ) {
    this.pages = pagesService.getPages();
    this.currentPageNo = 1;
  }
  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe(
      enableDarkMode => (this.darkMode = enableDarkMode)
    );
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

  jumpToPage(pageNo: number) {
    this.currentPageNo = pageNo;
  }

  onChange(el: HTMLSelectElement) {
    this.currentPageNo = parseInt(el.value, 10);
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode(!this.darkMode);
  }
}
