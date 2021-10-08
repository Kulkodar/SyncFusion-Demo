import {Component, OnInit} from '@angular/core';
import {links} from "../links"

@Component({
  selector: 'syncfusion-demo-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  links = links;

  constructor() {
  }

  ngOnInit(): void {
  }


}

