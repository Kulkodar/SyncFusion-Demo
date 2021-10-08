import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GridTreeComponent} from "./grid.tree/grid.tree.component";

const routes: Routes = [
  { path: 'gridtree', component: GridTreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
