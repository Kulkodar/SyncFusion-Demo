import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";
import {SidebarService} from "@services/sidebar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  @ViewChild('sidebar', {static: false}) sidebar: SidebarComponent;
  public sidebarItems: Promise<any[]>
  public closeOnDocumentClick: boolean = true;
  public width = "200px";

  constructor(private sidebarService: SidebarService) {
    this.sidebarItems = sidebarService.getSidebarItems();
  }

  ngOnInit(): void {
  }

  openClick(): void {
    this.sidebar.toggle();
  }

  public onCreated() {
    this.sidebar.element.style.visibility = '';
  }

  closeClick(): void {
    this.sidebar.hide();
  }

  toggleClick(): void {
    this.sidebar.show();
  }
}
