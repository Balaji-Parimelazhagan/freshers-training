import { Component, OnInit } from '@angular/core';
import { ChatService } from '../extra-components/chat/chat.service';

@Component({
  selector: 'ngx-daily-status-reports',
  templateUrl: './daily-status-reports.component.html',
  styleUrls: ['./daily-status-reports.component.scss'],
  providers: [ ChatService ],
})
export class DailyStatusReportsComponent implements OnInit {

  messages: any[];
  dailyStatusReports = [
    {
      task: 'Spring IOC and MVC',
      tasktStatus: 'completed',
      description: 'Hi Sir, i have completed the spring ioc and mvc overall and submitted for your review. The code is working fine',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '22/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Spring IOC and MVC',
      tasktStatus: 'inProgress',
      description: 'Sir, today i completed spring mvc and tested. IOC, i will be completing tomorrow',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '21/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Spring IOC and MVC',
      tasktStatus: 'inProgress',
      description: ' Sir, I have started with spring mvc and facing some issues, will be completed by tomorrow',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '20/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Hibernate',
      tasktStatus: 'completed',
      description: 'Sir, i have completed hibernate with caching and mysql',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '19/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Hibernate',
      tasktStatus: 'inProgress',
      description: 'Sir, i completed hibernate but caching alone is pending',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '18/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'JDBC and collections',
      tasktStatus: 'completed',
      description: 'Sir, i could test jdbc with mysql connectivity, and integrated collections also',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '13/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'JDBC and collections',
      tasktStatus: 'inProgress',
      description: 'Sir, i completed collections, set up database and started with jdbc',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '12/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'JDBC and collections',
      tasktStatus: 'inProgress',
      description: 'Sir, i am starting with collections today and went through all the concepts',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '11/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Micro application',
      tasktStatus: 'completed',
      description: 'Sir, i have completed my entire application and completed peer review',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '09/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Micro application',
      tasktStatus: 'inProgress',
      description: 'Sir, i completed the application and submitted for peer review',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '08/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
    {
      task: 'Micro application',
      tasktStatus: 'inProgress',
      description: 'Sir today i am half way through the application and resolving all the issues',
      gitLink: 'https://github.com/',
      attachments: 'Screenshots of application',
      reportedOn: '07/01',
      taskBlocker: 'nill',
      isDSRDetailDisplayed: false
    },
  ];

  constructor(protected chatService: ChatService) {
    this.messages = this.chatService.loadMessages();
  }
  

  ngOnInit(): void {
    // for(let i=0; i < 10; i++) {
    //   this.dailyStatusReports.push({
    //     task: 'Update Page Creation',
    //     tasktStatus: 'completed',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   },
    //   {
    //     task: 'Update Page Creation',
    //     tasktStatus: 'inProgress',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   },
    //   {
    //     task: 'Update Page Creation',
    //     tasktStatus: 'open',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   })
    // }
  }

  toggleDSRDetailsDiv(index) {
    this.dailyStatusReports[index].isDSRDetailDisplayed = !this.dailyStatusReports[index].isDSRDetailDisplayed;
  }
  
  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply); }, 500);
    }
  }

  loadDSR() {
    // for(let i=0; i < 10; i++) {
    //   this.dailyStatusReports.push({
    //     task: 'Update Page Creation',
    //     tasktStatus: 'completed',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   },
    //   {
    //     task: 'Update Page Creation',
    //     tasktStatus: 'inProgress',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   },
    //   {
    //     task: 'Update Page Creation',
    //     tasktStatus: 'open',
    //     description: 'Update Page Creation using is in Progress, Validation Part is yet to be Completed',
    //     gitLink: 'https://github.com/',
    //     attachments: 'Screenshots of application',
    //     reportedOn: '25/12',
    //     taskBlocker: 'nill',
    //     isDSRDetailDisplayed: false
    //   })
    // }
  }

  
}
