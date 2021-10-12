import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Button } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'syncfusion-demo-usertoolbar',
  templateUrl: './usertoolbar.component.html',
  styleUrls: ['./usertoolbar.component.scss']
})
export class UsertoolbarComponent implements OnInit {

  public mediaBtn: any;

  constructor() {
    this.mediaBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-play-icon', isToggle: false });
    this.mediaBtn.appendTo('#media_btn');
  }

  ngOnInit(): void {
  }


}
