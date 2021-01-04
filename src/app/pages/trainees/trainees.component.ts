import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Title: string;
  Project: string;
  Assignee: string;
  Due_Date?: string;
  Status: string;
  Time_Spent: string;
  Tags: string;
  Action: string;
}

@Component({
  selector: 'ngx-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {
  // customColumn = 'Action';
  // defaultColumns = [ 'Title', 'Project', 'Assignee', 'Due_Date', 'Status', 'Time_Spent', 'Tags' ];
  // allColumns = [...this.defaultColumns,  this.customColumn ];
  // dataSource: NbTreeGridDataSource<FSEntry>;
  // sortColumn: string;
  // sortDirection: NbSortDirection = NbSortDirection.NONE;
  // source: LocalDataSource = new LocalDataSource();

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    // this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit(): void {
  }

  // Tree Grid Approach 
  // updateSort(sortRequest: NbSortRequest): void {
  //   this.sortColumn = sortRequest.column;
  //   this.sortDirection = sortRequest.direction;
  // }

  // getSortDirection(column: string): NbSortDirection {
  //   if (this.sortColumn === column) {
  //     return this.sortDirection;
  //   }
  //   return NbSortDirection.NONE;
  // }

  // private data: TreeNode<FSEntry>[] = [
  //   {
  //     data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'},
  //     children: [
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //     ],
  //    },
  //   {
  //     data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'},
  //     children: [
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //     ],
  //   },
  //   {
  //     data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'},
  //     children: [
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //       { data: { Title: 'Create Employee Update Page', Project: 'iAssistant', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Status:'Completed', Time_Spent:'2d & 5h', Tags: 'Angular', Action: 'tick-icon'} },
  //     ],
  //   },
  // ];

  // getShowOn(index: number) {
  //   const minWithForMultipleColumns = 400;
  //   const nextColumnStep = 100;
  //   return minWithForMultipleColumns + (nextColumnStep * index);
  // }

  //
  data = { Title: 'Create Employee Update Page', Project: 'iAssistant', priority: 'LOW', Assignee: 'Arjun Thinakaran', Due_Date: '10/01/2021', Time_Spent:'2d & 5h', Tags: 'Angular', Status:'Completed', Action: 'COMPLETED'};

}
