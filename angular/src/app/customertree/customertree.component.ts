import { Component, OnInit } from '@angular/core';
import {users} from "../grid.tree/users";

@Component({
  selector: 'syncfusion-demo-customertree',
  templateUrl: './customertree.component.html',
  styleUrls: ['./customertree.component.scss']
})
export class CustomertreeComponent implements OnInit {

  constructor() {

    let userList = [];
    for(let i = 0; i < users.length; i++)
    {
      userList.push({id:users[i].id,name:users[i].firstName + " " + users[i].lastName});
    }

    this.hierarchicalData = [ {id:"Customer", name:"Customer", expanded:true,
        subChild: [
          {id: 'users', name: 'Users',
            subChild:userList},
        ]
        } ];

    this.field = { dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
  }

  ngOnInit(): void {
  }

  public hierarchicalData: Object[] ;
  public field:Object;
}
