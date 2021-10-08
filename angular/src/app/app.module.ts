import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {SidebarModule, TabModule} from '@syncfusion/ej2-angular-navigations';
import {GridTreeComponent} from "./grid.tree/grid.tree.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GridTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
