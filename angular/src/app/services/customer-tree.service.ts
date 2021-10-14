import {Injectable} from '@angular/core';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerTreeService {

  constructor(private userService: UserService) {
  }

  public getHierarchicalData() {
    let userList = this.userService.getUserList();
    return [{
      id: "Customer", name: "Customer", expanded: true,
      subChild: [
        {
          id: 'users', name: 'Users',
          subChild: userList
        },
      ]
    }];
  }
}
