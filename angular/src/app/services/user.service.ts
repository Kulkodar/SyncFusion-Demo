import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 3,
      firstName: "Kevin",
      lastName: "Winkler",
      email: "kevin.winkler@cn-consult.eu"
    },
    {
      id: 2,
      firstName: "Max",
      lastName: "Musterman",
      email: "max.musterman@cn-consult.eu"
    },
  ];

  constructor() { }

  public getUsers(): Promise<User[]> {
    return new Promise<User[]>(resolve => resolve(this.users));
  }

  public getUser(id: number)
  {
    return new Promise<User|undefined>(resolve => {
      let tempUser = this.users.find(user => user.id == id)
      resolve(tempUser);
    });
  }

  public getUserList() {
    let userList = [];
    for (let i = 0; i < this.users.length; i++) {
      userList.push({id: this.users[i].id, name: this.users[i].firstName + " " + this.users[i].lastName});
    }
    return userList;
  }
}
