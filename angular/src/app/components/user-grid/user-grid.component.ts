import {Component, OnInit} from '@angular/core';
import {UserService} from "@services/user.service";
import {User} from "@models/user";

@Component({
  selector: 'syncfusion-demo-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  users: Promise<User[]>;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit(): void {


  }

  public addUser() {
    // this.data?.push({ firstName: "Test", lastName: 'Test', email: "test@test.test" })
  }

}
