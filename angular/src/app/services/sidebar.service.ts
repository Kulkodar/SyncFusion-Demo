import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarItems: Object[] = [
    {
      id: "sidebar-listview-1",
      text: "Grid",
      link: "grid-tree"
    },
    {
      id: "sidebar-listview-2",
      text: "Home",
      link: "home"
    }
  ];

  constructor() {
  }

  public getSidebarItems(): Promise<Object[]> {
    return new Promise<Object[]>(resolve => resolve(this.sidebarItems));
  }
}
