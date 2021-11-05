import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "@services/user.service";
import {User} from "@models/user";
import {
  Column,
  EditEventArgs,
  EditSettingsModel,
  GridComponent, IEditCell,
  ToolbarItems
} from "@syncfusion/ej2-angular-grids";

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
  public formatOptions: object;
  public dpParams: IEditCell | undefined;
  @ViewChild('grid') grid: GridComponent | undefined;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.formatOptions = {type: 'date', format: 'dd/MM/yyyy'};
  }

  ngOnInit(): void {
    this.dpParams = { params: {value: new Date() } };
  }

  public addUser() {
    // this.data?.push({ firstName: "Test", lastName: 'Test', email: "test@test.test" })
  }

  actionBegin(args: EditEventArgs) {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      // @ts-ignore
      for (const cols of this.grid?.columns) {
        if ((cols as Column).field === 'actions') {
          (cols as Column).visible = false;
        }
        if ((cols as Column).field === 'birthday') {
          (cols as Column).visible = true;
        }
      }
    }
  }

  actionComplete(args: { requestType: string; dialog: any; rowData: { [x: string]: string; }; }) {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      console.log("test");
      const dialog = args.dialog;
      dialog.showCloseIcon = false;
      dialog.height = 400;
      dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['firstName'] + ' ' + args.rowData['lastName'] : 'New User';
    }
    if (args.requestType === 'save') {
      // @ts-ignore
      for (const cols of this.grid?.columns) {
        if ((cols as Column).field === 'actions') {
          (cols as Column).visible = true;
        }
        if ((cols as Column).field === 'birthday') {
          (cols as Column).visible = false;
        }
      }
    }
  }
}
