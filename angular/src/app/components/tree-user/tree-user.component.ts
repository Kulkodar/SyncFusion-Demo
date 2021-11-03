import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "@models/user";
import {UserService} from "@services/user.service";
import {DialogComponent} from "@syncfusion/ej2-angular-popups";

export interface UserDetails {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'syncfusion-demo-tree-user',
  templateUrl: './tree-user.component.html',
  styleUrls: ['./tree-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TreeUserComponent implements OnInit {

  user: Promise<User | undefined> | undefined;
  public UserDetails: UserDetails;
  @ViewChild('Dialog')
  public dialogObj: DialogComponent | undefined;
  @ViewChild('userForm') form: any;
  public width: string = '335px';
  public visible: boolean = false;
  public multiple: boolean = false;
  public showCloseIcon: Boolean = true;
  public formHeader: string = 'Success';
  public content: string = 'You have successfully registered, Thank you.';
  public target: string = '#control_wrapper';
  public isModal: boolean = true;
  public animationSettings: object = {
    effect: 'Zoom'
  };
  constructor(private activeRoute : ActivatedRoute, private userService: UserService) {
    this.activeRoute.paramMap.subscribe((params : ParamMap)=> {
      this.user = this.userService.getUser(parseInt(<string>params.get("id")));
      }
    );
    this.UserDetails = {
      firstname: '',
      lastname: '',
      username: 'erawrsar',
      password: '',
      email:'',
      mobile: ''
    };
  }

  ngOnInit(): void {

  }

}
