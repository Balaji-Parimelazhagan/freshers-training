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

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
  }

  ngOnInit(): void {
  }

  trainees = [
    {
      name: 'Balaji Parimelazhagan',
      team: 'Team-1',
      id: 'I19015',
      image: '../../../assets/images/alan.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Mani Bharahi',
      team: 'Team-1',
      id: 'I19019',
      image: '../../../assets/images/jack.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '25/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'green'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Sathish Varma',
      team: 'Team-1',
      id: 'I19018',
      image: '../../../assets/images/nick.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Bala Kumaran',
      team: 'Team-1',
      id: 'I19016',
      image: '../../../assets/images/alan.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Lakshman Prabhu Naidu',
      team: 'Team-1',
      id: 'I19017',
      image: '../../../assets/images/jack.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Bharani Deepan',
      team: 'Team-2',
      id: 'I19022',
      image: '../../../assets/images/nick.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Surya Sivakumar',
      team: 'Team-2',
      id: 'I19021',
      image: '../../../assets/images/alan.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
    {
      name: 'Mukesh Ambhani',
      team: 'Team-2',
      id: 'I19020',
      image: '../../../assets/images/jack.png',
      tasks:[
        {
        id: 'TSK-3',
        title: 'Micro application',
        assignedBy: 'Mohan Kumar',
        assignedOn: '21/01/2021',
        dueDate: '23/01/2021',
        completedDate:'-',
        stream: 'General',
        status:'In-Progress',
        statusColor:'amber'
        },
        {
        id: 'TSK-2',
        title: 'Layered approach',
        assignedBy: 'Sayed Sulaiman',
        assignedOn: '18/01/2021',
        dueDate: '20/01/2021',
        completedDate:'18/01/2021',
        stream: 'General',
        status:'Completed',
        statusColor:'green'
        },
        {
        id: 'TSK-1',
        title: 'Basic java programming',
        assignedBy: 'Ananth Babu',
        assignedOn: '14/01/2021',
        dueDate: '16/01/2021',
        completedDate:'17/01/2021',
        stream: 'General',
        status:'Completed Over Due',
        statusColor:'red'
        },
      ]
    },
  ];

}
