import {Component, OnInit} from '@angular/core';
import {users} from "@components/user-toolbar/users";

@Component({
  selector: 'syncfusion-demo-customer-tree',
  templateUrl: './customer-tree.component.html',
  styleUrls: ['./customer-tree.component.scss']
})
export class CustomerTreeComponent implements OnInit {

  public hierarchicalData: Object[];
  public field: Object;

  constructor() {
    let userList = [];
    for (let i = 0; i < users.length; i++) {
      userList.push({id: users[i].id, name: users[i].firstName + " " + users[i].lastName});
    }

    this.hierarchicalData = [{
      id: "Customer", name: "Customer", expanded: true,
      subChild: [
        {
          id: 'users', name: 'Users',
          subChild: userList
        },
      ]
    }];

    this.field = {dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild'};
  }

  ngOnInit(): void {
  }

}
