import { Component, OnInit } from '@angular/core';
import {users} from "../user-toolbar/users";

@Component({
  selector: 'syncfusion-demo-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  data = [];

  constructor() { }

  ngOnInit(): void {


  }

  public addUser()
  {
    // this.data?.push({ firstName: "Test", lastName: 'Test', email: "test@test.test" })
  }

}
