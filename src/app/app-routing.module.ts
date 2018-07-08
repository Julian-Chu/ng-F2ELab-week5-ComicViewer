import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChapterComponent } from "./chapter/chapter.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chapter", component: ChapterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
