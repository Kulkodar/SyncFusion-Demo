import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "@models/user";
import {UserService} from "@services/user.service";

@Component({
  selector: 'syncfusion-demo-tree-user',
  templateUrl: './tree-user.component.html',
  styleUrls: ['./tree-user.component.scss']
})

export class TreeUserComponent implements OnInit {

  user: Promise<User | undefined> | undefined;

  constructor(private activeRoute : ActivatedRoute, private userService: UserService) {
    this.activeRoute.paramMap.subscribe((params : ParamMap)=> {
      this.user = this.userService.getUser(parseInt(<string>params.get("id")));
      }
    );
  }

  ngOnInit(): void {
  }

}
