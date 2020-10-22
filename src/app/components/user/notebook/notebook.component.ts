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
      updated: "40 años",
    }
  ];
  notes: any[] = [
    {
      name: 'Hijo #1',
      updated: "1 año 3 meses",
    },
    {
      name: 'Hijo #2',
      updated: "6 año 2 meses",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
