import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
  IItemClickEventArgs,
  IItemMoveEventArgs,
  ILoadEventArgs,
  TreeMap, TreeMapLegend,
  TreeMapTheme, TreeMapTooltip
} from "@syncfusion/ej2-angular-treemap";
import {CarSalesService} from "@services/car-sales.service";
import {CarSales} from "@models/car-sales";
import {ContextMenuComponent, MenuEventArgs, MenuItemModel} from "@syncfusion/ej2-angular-navigations";
import {Browser} from "@syncfusion/ej2-base";

// tooltips only functions when the needed module is injected
TreeMap.Inject(TreeMapTooltip, TreeMapLegend);

@Component({
  selector: 'syncfusion-demo-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})

export class TreeMapComponent implements OnInit {

  public itemMove(args: IItemMoveEventArgs) {
    // @ts-ignore
    args.item['data'].Sales = args.item['weight'];
    // @ts-ignore
    args.treemap.tooltipSettings.format = args.item['groupIndex'] === 0 ? 'Country: ${Continent}<br>Sales: ${Sales}' :
      'Country: ${Continent}<br>Company: ${Company}<br>Sales: ${Sales}';
  }

  public itemClick(args: IItemClickEventArgs) {
    // @ts-ignore
    args.item['data'].Sales = args.item['weight'];
    // @ts-ignore
    args.treemap.tooltipSettings.format = args.item['groupIndex'] === 0 ? 'Country: ${Continent}<br>Sales: ${Sales}' :
      'Country: ${Continent}<br>Company: ${Company}<br>Sales: ${Sales}';
  }

  // custom code start
  public load(args: ILoadEventArgs) {
    let theme: string = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    // @ts-ignore
    args.treemap.theme = <TreeMapTheme>(theme.charAt(0).toUpperCase() +
      theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
  }
  // custom code end

  titleSettings: object = {
    text: 'Car Sales by Country - 2017',
    textStyle: {
      size: '15px'
    }
  };
  public tooltipSettings: object = {
    visible: true,
    format: 'Country: ${Continent}<br>Company: ${Company}<br>Sales: ${Sales}'
  };
  public legendSettings: object = {
    visible: true,
    position: 'Top',
    shape: 'Rectangle'
  };
  weightValuePath: string = 'Sales';
  palette: string[] = ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'];
  leafItemSettings: object = {
    labelPath: 'Company',
    border: {color: 'white', width: 0.5}
  };
  border: object = {
    color: 'white',
    width: 0.5
  };

  public salesData: CarSales[];

   constructor(private carSalesService: CarSalesService) {
    this.salesData = carSalesService.getSales();
  }

  ngOnInit(): void {

    }

  public content: string = '';

  @ViewChild('contextmenu')
  public contextmenu: ContextMenuComponent | undefined;

  // Event triggers while rendering each menu item where “Link” menu item is disabled
  public addDisabled  (args: MenuEventArgs) {
    if (args.item.text === 'Link') {
      args.element.classList.add('e-disabled');
    }
  }

  // ContextMenu items definition
  public menuItems: MenuItemModel[] = [
    {
      text: 'Cut',
      iconCss: 'e-cm-icons e-cut'
    },
    {
      text: 'Copy',
      iconCss: 'e-cm-icons e-copy'
    },
    {
      text: 'Paste',
      iconCss: 'e-cm-icons e-paste',
      items: [
        {
          text: 'Paste Text',
          iconCss: 'e-cm-icons e-pastetext'
        },
        {
          text: 'Paste Special',
          iconCss: 'e-cm-icons e-pastespecial'
        }
      ]
    },
    {
      separator: true
    },
    {
      text: 'Link',
      iconCss: 'e-cm-icons e-link'
    },
    {
      text: 'New Comment',
      iconCss: 'e-cm-icons e-comment'
    }];

  // Event triggers once the context menu rendering is completed.
  onCreated(): void {
    if (Browser.isDevice) {
      this.content = 'Touch hold to open the ContextMenu';
      // @ts-ignore
      this.contextmenu.animationSettings.effect = 'ZoomIn';
    } else {
      this.content = 'Right click / Touch hold to open the ContextMenu';
      // @ts-ignore
      this.contextmenu.animationSettings.effect = 'SlideDown';
    }
  }
}
