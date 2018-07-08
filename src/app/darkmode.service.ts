import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DarkmodeService {
  private _darkModeStatus = new BehaviorSubject(false);
  isDarkMode = this._darkModeStatus.asObservable();
  constructor() {}

  toggleDarkMode(enable: boolean) {
    this._darkModeStatus.next(enable);
  }
}
