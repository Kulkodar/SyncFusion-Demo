import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarModule, TabModule, ToolbarModule, TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import {GridModule} from '@syncfusion/ej2-angular-grids';
import {UserToolbarComponent} from '@components/user-toolbar/user-toolbar.component';
import {CustomerTreeComponent} from '@components/customer-tree/customer-tree.component';
import {SideNavigationComponent} from '@components/side-navigation/side-navigation.component';
import {UserGridComponent} from '@components/user-grid/user-grid.component';
import {HomeComponent} from '@components/home/home.component';
import {GridTreeComponent} from "@components/grid-tree/grid-tree.component";

@NgModule({
  declarations: [
    AppComponent,
    GridTreeComponent,
    UserToolbarComponent,
    CustomerTreeComponent,
    SideNavigationComponent,
    UserGridComponent,
    HomeComponent
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
export class AppModule {
}
