import {Component, OnInit} from '@angular/core';
import {Button} from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: 'syncfusion-demo-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss']
})
export class UserToolbarComponent implements OnInit {

  public mediaBtn: any;

  constructor() {
    this.mediaBtn = new Button({cssClass: `e-flat`, iconCss: 'e-icons e-play-icon', isToggle: false});
    this.mediaBtn.appendTo('#media_btn');
  }

  ngOnInit(): void {
  }

}
