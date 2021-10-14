import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "@services/user.service";
import {User} from "@models/user";
import {DialogEditEventArgs, EditSettingsModel, ToolbarItems} from "@syncfusion/ej2-angular-grids";
import {FormGroup} from "@angular/forms";
import {EmitType} from "@syncfusion/ej2-base";

class DialogComponent {
}

@Component({
  selector: 'syncfusion-demo-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  users: Promise<User[]>;

  public hidden = true;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
  }

  ngOnInit(): void {
  }

  public addUser() {
    // this.data?.push({ firstName: "Test", lastName: 'Test', email: "test@test.test" })
  }

}
