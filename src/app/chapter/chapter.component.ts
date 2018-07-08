import { DarkmodeService } from "./../darkmode.service";
import { PagesService, Page } from "./../pages.service";
import { Component, OnInit, AfterViewChecked } from "@angular/core";

@Component({
  selector: "app-chapter",
  templateUrl: "./chapter.component.html",
  styleUrls: ["./chapter.component.css"]
})
export class ChapterComponent implements OnInit, AfterViewChecked {
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

  jumpToPage(event: MouseEvent, pageNo: number) {
    this.currentPageNo = pageNo;
    console.log(event);
  }

  onChange(el: HTMLSelectElement) {
    this.currentPageNo = parseInt(el.value, 10);
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode(!this.darkMode);
  }

  ngAfterViewChecked() {
    const id = "page" + this.currentPageNo;
    const thumbnail = document.getElementById(id);
    const thumbnailsContainer: HTMLElement = document.querySelector(
      ".thumbnails"
    );
    const distToScroll = thumbnail.offsetLeft - thumbnailsContainer.offsetLeft;
    thumbnailsContainer.scrollLeft = distToScroll - 60 * this.currentPageNo;
  }
}
