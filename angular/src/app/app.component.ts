import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // @ts-ignore
  @ViewChild('sidebar', {static: false}) sidebar: SidebarComponent;

  public showBackdrop: boolean = true;
  public closeOnDocumentClick: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeClick(): void {
    this.sidebar.hide();
  }

  toggleClick():void{
    this.sidebar.show();
  }
}
