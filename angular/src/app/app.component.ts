import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";
import {SidebarService} from "@services/sidebar.service";
import {SidebarItem} from "@models/sidebar-item";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // @ts-ignore
  @ViewChild('sidebar', {static: false}) sidebar: SidebarComponent;
  public sidebarItems: Promise<SidebarItem[]>
  public showBackdrop: boolean = true;
  public closeOnDocumentClick: boolean = true;

  constructor(private sidebarService: SidebarService) {
    this.sidebarItems = sidebarService.getSidebarItems();
  }

  ngOnInit(): void {
  }

  closeClick(): void {
    this.sidebar.hide();
  }

  toggleClick():void{
    this.sidebar.show();
  }
}
