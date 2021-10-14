import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridTreeComponent} from "@components/grid-tree/grid-tree.component";

const routes: Routes = [
  {
    path: "grid-tree",
    component: GridTreeComponent
  },
  {
    path: "",
    redirectTo: "grid-tree",
    pathMatch: "full"
  },
  {
    path: "**", redirectTo: "grid-tree"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
