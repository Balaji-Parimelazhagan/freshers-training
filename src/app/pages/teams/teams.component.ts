import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teams = [
    {
      name: 'Team 1',
      batch: '2020',
      stream: 'Development',
      imageOne: '../../../assets/images/alan.png',
      imageTwo: '../../../assets/images/jack.png',
      imageThree: '../../../assets/images/nick.png',
      mentors: [
        {
          name:'Ananth Babu'
        },
        {
          name:'Syed Sulaiman'
        }
      ],
      members: [
        {
          name:'Balaji Parimelazhagan'
        },
        {
          name:'Sathish Varma'
        },
        {
          name:'Mani Bharathi'
        },
        {
          name:'Bala Kumaran'
        },
        {
          name:'Lakshman Prabhu Naidu'
        }
      ]
    },
    {
      name: 'Team 2',
      batch: '2020',
      stream: 'Quality Analysis',
      imageOne: '../../../assets/images/lee.png',
      imageTwo: '../../../assets/images/alan.png',
      imageThree: '../../../assets/images/nick.png',
      mentors: [
        {
          name:'Mohan Kumar'
        },
        {
          name:'Kiran Kumar'
        }
      ],
      members: [
        {
          name:'Mukeah Ambhani'
        },
        {
          name:'Bharani Deepan'
        },
        {
          name:'Surya Sivakumar'
        },
        {
          name:'Joseph Naveen'
        }
      ],
    },
    {
      name: 'Team 3',
      batch: '2020',
      stream: 'Development',
      imageOne: '../../../assets/images/jack.png',
      imageTwo: '../../../assets/images/nick.png',
      imageThree: '../../../assets/images/kate.png',
      mentors: [
        {
          name:'Raj Mohan'
        },
        {
          name:'Lokesh Kumar'
        }
      ],
      members: [
        {
          name:'Sangeetha'
        },
        {
          name:'Gopinath Ravi'
        },
        {
          name:'Pravin Sivakumar'
        },
        {
          name:'Joseph Naveen'
        }
      ],
    },
    {
      name: 'Team 4',
      batch: '2020',
      stream: 'Development',
      imageOne: '../../../assets/images/eva.png',
      imageTwo: '../../../assets/images/lee.png',
      imageThree: '../../../assets/images/alan.png',
      mentors: [
        {
          name:'Albert Kumar'
        },
        {
          name:'Rajasekar'
        }
      ],
      members: [
        {
          name:'Mansoor'
        },
        {
          name:'Gopinath Ravi'
        },
        {
          name:'Yoheshwaran'
        },
        {
          name:'Sanjay Manjrekar'
        }
      ],
    }
  ];
}
