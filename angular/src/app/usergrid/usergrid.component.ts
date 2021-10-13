import { Component, OnInit } from '@angular/core';
import {users} from "../grid.tree/users";

@Component({
  selector: 'syncfusion-demo-usergrid',
  templateUrl: './usergrid.component.html',
  styleUrls: ['./usergrid.component.scss']
})
export class UsergridComponent implements OnInit {

  data = users;

  constructor() { }

  ngOnInit(): void {


  }

  public addUser()
  {
    // this.data?.push({ firstName: "Test", lastName: 'Test', email: "test@test.test" })
  }

}
