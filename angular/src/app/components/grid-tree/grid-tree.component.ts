import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'syncfusion-demo-grid-tree',
  templateUrl: './grid-tree.component.html',
  styleUrls: ['./grid-tree.component.scss']
})
export class GridTreeComponent implements OnInit {

  public headerText = [
    {text: "Users"},
    {text: "Customer Tree"}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
