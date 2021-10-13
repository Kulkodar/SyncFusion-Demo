import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'syncfusion-demo-customertree',
  templateUrl: './customertree.component.html',
  styleUrls: ['./customertree.component.scss']
})
export class CustomertreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public hierarchicalData: Object[] = [
    { id: '01', name: 'Music', expanded: true,
      subChild: [
        {id: '01-01', name: 'Gouttes.mp3'},
      ]
    },
    {
      id: '02', name: 'Videos',
      subChild: [
        {id: '02-01', name: 'Naturals.mp4'},
        {id: '02-02', name: 'Wild.mpeg'}
      ]
    },
    {
      id: '03', name: 'Documents',
      subChild: [
        {id: '03-01', name: 'Environment Pollution.docx'},
        {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
        {id: '03-03', name: 'Global Warming.ppt'},
        {id: '03-02', name: 'Social Network.pdf'},
        {id: '03-03', name: 'Youth Empowerment.pdf'},
      ]
    },
    { id: '04', name: 'Music', expanded: true,
      subChild: [
        {id: '04-01', name: 'Gouttes.mp3'},
      ]
    },
    {
      id: '05', name: 'Videos',
      subChild: [
        {id: '05-01', name: 'Naturals.mp4'},
        {id: '05-02', name: 'Wild.mpeg'}
      ]
    },
    {
      id: '06', name: 'Documents',
      subChild: [
        {id: '06-01', name: 'Environment Pollution.docx'},
        {id: '06-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
        {id: '06-03', name: 'Global Warming.ppt'},
        {id: '06-02', name: 'Social Network.pdf'},
        {id: '06-03', name: 'Youth Empowerment.pdf'},
      ]
    }
  ];
  public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
}
