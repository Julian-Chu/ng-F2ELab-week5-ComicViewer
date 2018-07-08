import { DarkmodeService } from "./darkmode.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  darkMode = false;
  /**
   *
   */
  constructor(private darkmodeService: DarkmodeService) {}
  ngOnInit(): void {
    this.darkmodeService.isDarkMode.subscribe(
      enableDarkMode => (this.darkMode = enableDarkMode)
    );
  }
}
