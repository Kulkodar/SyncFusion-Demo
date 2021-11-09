import { Component, OnInit } from '@angular/core';
import {CustomerTreeService} from "@services/customer-tree.service";

@Component({
  selector: 'syncfusion-demo-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.scss']
})

export class NestedListComponent implements OnInit {

  //Set header title
  public headerTitle: string = 'Nestedlist';
  public hierarchicalData: Object[];
  public field: Object;

  constructor(private customerTreeService: CustomerTreeService) {
    this.hierarchicalData = this.customerTreeService.getHierarchicalData();
    this.field = {dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild'};
  }

  ngOnInit(): void {
  }

}
