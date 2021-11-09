import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ContextMenuModule,
  SidebarModule,
  TabModule,
  ToolbarModule,
  TreeViewModule
} from '@syncfusion/ej2-angular-navigations';
import {EditService, GridModule, ToolbarService} from '@syncfusion/ej2-angular-grids';
import {UserToolbarComponent} from '@components/user-toolbar/user-toolbar.component';
import {CustomerTreeComponent} from '@components/customer-tree/customer-tree.component';
import {SideNavigationComponent} from '@components/side-navigation/side-navigation.component';
import {UserGridComponent} from '@components/user-grid/user-grid.component';
import {HomeComponent} from '@components/home/home.component';
import {GridTreeComponent} from "@components/grid-tree/grid-tree.component";
import {ListViewModule} from "@syncfusion/ej2-angular-lists";
import {FormsModule} from "@angular/forms";
import {ButtonModule, CheckBoxModule} from "@syncfusion/ej2-angular-buttons";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {TreeUserComponent} from "@components/tree-user/tree-user.component";
import {TextBoxModule} from "@syncfusion/ej2-angular-inputs";
import {FlexModule} from "@angular/flex-layout";
import {DatePickerAllModule} from "@syncfusion/ej2-angular-calendars";
import {NestedListComponent} from "@components/nested-list/nested-list.component";
import { TreeMapComponent } from './components/tree-map/tree-map.component';
import {TreeMapModule} from "@syncfusion/ej2-angular-treemap";

@NgModule({
  declarations: [
    AppComponent,
    GridTreeComponent,
    UserToolbarComponent,
    CustomerTreeComponent,
    SideNavigationComponent,
    UserGridComponent,
    HomeComponent,
    TreeUserComponent,
    NestedListComponent,
    TreeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TabModule,
    GridModule,
    ToolbarModule,
    TreeViewModule,
    ListViewModule,
    DialogModule,
    FormsModule,
    CheckBoxModule,
    ButtonModule,
    TextBoxModule,
    FlexModule,
    DatePickerAllModule,
    TreeMapModule,
    ContextMenuModule,
  ],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
