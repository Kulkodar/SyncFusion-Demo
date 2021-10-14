import { Injectable } from '@angular/core';
import {SidebarItem} from "@models/sidebar-item";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarItems: SidebarItem[] = [
    {
      name: "Grid",
      link: "grid-tree"
    }
  ];

  constructor() { }

  public getSidebarItems(): Promise<SidebarItem[]> {
    return new Promise<SidebarItem[]>(resolve => resolve(this.sidebarItems));
  }
}
