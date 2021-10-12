import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syncfusion-demo-usergrid',
  templateUrl: './usergrid.component.html',
  styleUrls: ['./usergrid.component.scss']
})
export class UsergridComponent implements OnInit {

  public data: { FirstName: string; LastName: string; Email: string; Actions: string; }[] | undefined;

  constructor() { }

  ngOnInit(): void {

    // First name, last name, email, actions
    this.data = [
      { FirstName: "Max", LastName: 'Musterman', Email: "max@musterman.de", Actions: '' },
      { FirstName: "Max", LastName: 'Musterman', Email: "max@musterman.de", Actions: '' },
      { FirstName: "Max", LastName: 'Musterman', Email: "max@musterman.de", Actions: '' },
      { FirstName: "Max", LastName: 'Musterman', Email: "max@musterman.de", Actions: '' },
      { FirstName: "Max", LastName: 'Musterman', Email: "max@musterman.de", Actions: '' },
    ];

  }

}
