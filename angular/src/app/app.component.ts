import {Component, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular';

  public onCreated(args: any) {
  }

  // @ts-ignore
  @ViewChild('sidebar') sidebar: SidebarComponent;

  public showBackdrop: boolean = false;
  public closeOnDocumentClick: boolean = false;
}
