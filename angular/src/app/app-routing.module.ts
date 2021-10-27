import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridTreeComponent} from "@components/grid-tree/grid-tree.component";
import {HomeComponent} from "@components/home/home.component";
import {TreeUserComponent} from "@components/tree-user/tree-user.component";

const routes: Routes = [
  {
    path: "grid-tree",
    component: GridTreeComponent,
    children:[
      { path: 'user/:id', component: TreeUserComponent}
    ]
  },
  {
    path: "home",
    component: HomeComponent
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
