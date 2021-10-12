import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {SidebarModule, TabModule} from '@syncfusion/ej2-angular-navigations';
import {GridTreeComponent} from "./grid.tree/grid.tree.component";
import { UsergridComponent } from './usergrid/usergrid.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GridTreeComponent,
    UsergridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TabModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
