import {Component, OnInit} from '@angular/core';
import {CustomerTreeService} from "@services/customer-tree.service";
import {SelectEventArgs} from "@syncfusion/ej2-angular-lists";
import {NodeSelectEventArgs} from "@syncfusion/ej2-angular-navigations";
import {Router} from "@angular/router";

@Component({
  selector: 'syncfusion-demo-customer-tree',
  templateUrl: './customer-tree.component.html',
  styleUrls: ['./customer-tree.component.scss']
})
export class CustomerTreeComponent implements OnInit {

  public hierarchicalData: Object[];
  public field: Object;

  constructor(private customerTreeService: CustomerTreeService, private router: Router) {
    this.hierarchicalData = customerTreeService.getHierarchicalData();
    this.field = {dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild'};
  }

  ngOnInit(): void {
  }

  onNodeSelect(event : NodeSelectEventArgs)
  {
    this.router.navigate(['grid-tree/user/' + event.nodeData.id]);
  }
}
