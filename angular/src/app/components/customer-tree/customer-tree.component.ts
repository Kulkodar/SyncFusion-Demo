import {Component, OnInit} from '@angular/core';
import {CustomerTreeService} from "@services/customer-tree.service";

@Component({
  selector: 'syncfusion-demo-customer-tree',
  templateUrl: './customer-tree.component.html',
  styleUrls: ['./customer-tree.component.scss']
})
export class CustomerTreeComponent implements OnInit {

  public hierarchicalData: Object[];
  public field: Object;

  constructor(private customerTreeService: CustomerTreeService) {
    this.hierarchicalData = customerTreeService.getHierarchicalData();
    this.field = {dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild'};
  }

  ngOnInit(): void {
  }

}
