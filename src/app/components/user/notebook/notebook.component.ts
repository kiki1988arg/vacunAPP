import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  folders: any[] = [
    {
      name: 'Yo',
      updated: new Date('1/1/16'),
    }
  ];
  notes: any[] = [
    {
      name: 'Hijo #1',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Hijo #2',
      updated: new Date('1/18/16'),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
