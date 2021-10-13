import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {SidebarModule, TabModule, ToolbarModule, TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import {GridTreeComponent} from "./grid.tree/grid.tree.component";
import { UsergridComponent } from './usergrid/usergrid.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { UsertoolbarComponent } from './usertoolbar/usertoolbar.component';
import { CustomertreeComponent } from './customertree/customertree.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GridTreeComponent,
    UsergridComponent,
    UsertoolbarComponent,
    CustomertreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TabModule,
    GridModule,
    ToolbarModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
