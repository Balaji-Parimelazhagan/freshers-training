import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.scss']
})
export class AssessmentDetailsComponent implements OnInit {

  constructor() { }

  assessment = {
    title : '#ASMT-2 Servlets and JSPs',
    description : 'The Implementation & Integration of the Hibernate ORM will be reviewed. Hibernate ORM (or simply Hibernate) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate handles object-relational impedance mismatch problems by replacing direct, persistent database accesses with high-level object handling functions.',
    heldOn : '15/01/2021',
    assessedSkill : 'Programming',
    mentor : 'Syed Sulaiman',
    trainees : [
      {
        name : 'Balaji Parimelazhagan',
        id: 'I19015',
        team: 'Team-1',
        image: '../../../assets/images/alan.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 4,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 7,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 9,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 5,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 2,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
      {
        name : 'Bala Kumaran',
        id: 'I19016',
        team: 'Team-1',
        image: '../../../assets/images/jack.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 8,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 3,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 6,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 9,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 5,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
      {
        name : 'Laksman Prabhu Naidu',
        id: 'I19017',
        team: 'Team-1',
        image: '../../../assets/images/nick.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 9,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 5,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 3,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 10,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 2,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
      {
        name : 'Sathish Varma',
        id: 'I19018',
        team: 'Team-1',
        image: '../../../assets/images/nick.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 8,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 6,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 4,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 7,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 6,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
      {
        name : 'Mani Bharathi',
        id: 'I19019',
        team: 'Team-1',
        image: '../../../assets/images/alan.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 9,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 5,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 6,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 8,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 3,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
      {
        name : 'Mukesh Ambani',
        id: 'I19020',
        team: 'Team-1',
        image: '../../../assets/images/jack.png',
        metrics : [
          {
            title: 'Metric-1',
            rating: 4,
            comments: 'Excellent Code Quality in All aspects of the coding techniques'
          },
          {
            title: 'Metric-2',
            rating: 5,
            comments: 'Managed to Complete tasks on time'
          },
          {
            title: 'Metric-3',
            rating: 9,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-4',
            rating: 5,
            comments: 'Loop Holes found at corner cases'
          },
          {
            title: 'Metric-5',
            rating: 8,
            comments: 'Loop Holes found at corner cases'
          }
        ]
      },
    ],
    metrics: [
      {
        name: 'Mertric 1',
        trainees:[
          {
            name: 'Balaji Parimelazhagan',
            rating: 6
          },
          {
            name: 'Mani Bharathi',
            rating: 9
          },
          {
            name: 'Sathish Varma',
            rating: 8
          },
          {
            name: 'Bala Kumaran',
            rating: 5
          },
          {
            name: 'Lakshman Prabhu Naidu',
            rating: 7
          },
          {
            name: 'Surya Sivakumar',
            rating: 10
          },
          {
            name: 'Bharani Deepan',
            rating: 3
          },
        ]
      },
      {
        name: 'Mertric 2',
        trainees:[
          {
            name: 'Balaji Parimelazhagan',
            rating: 7
          },
          {
            name: 'Mani Bharathi',
            rating: 5
          },
          {
            name: 'Sathish Varma',
            rating: 3
          },
          {
            name: 'Bala Kumaran',
            rating: 9
          },
          {
            name: 'Lakshman Prabhu Naidu',
            rating: 10
          },
          {
            name: 'Surya Sivakumar',
            rating: 8
          },
          {
            name: 'Bharani Deepan',
            rating: 5
          },
        ]
      },
      {
        name: 'Mertric 3',
        trainees:[
          {
            name: 'Balaji Parimelazhagan',
            rating: 4
          },
          {
            name: 'Mani Bharathi',
            rating: 5
          },
          {
            name: 'Sathish Varma',
            rating: 9
          },
          {
            name: 'Bala Kumaran',
            rating: 5
          },
          {
            name: 'Lakshman Prabhu Naidu',
            rating: 6
          },
          {
            name: 'Surya Sivakumar',
            rating: 3
          },
          {
            name: 'Bharani Deepan',
            rating: 7
          },
        ]
      },
      {
        name: 'Mertric 4',
        trainees:[
          {
            name: 'Balaji Parimelazhagan',
            rating: 9
          },
          {
            name: 'Mani Bharathi',
            rating: 6
          },
          {
            name: 'Sathish Varma',
            rating: 7
          },
          {
            name: 'Bala Kumaran',
            rating: 5
          },
          {
            name: 'Lakshman Prabhu Naidu',
            rating: 8
          },
          {
            name: 'Surya Sivakumar',
            rating: 9
          },
          {
            name: 'Bharani Deepan',
            rating: 3
          },
        ]
      },
      {
        name: 'Mertric 5',
        trainees:[
          {
            name: 'Balaji Parimelazhagan',
            rating: 10
          },
          {
            name: 'Mani Bharathi',
            rating: 7
          },
          {
            name: 'Sathish Varma',
            rating: 9
          },
          {
            name: 'Bala Kumaran',
            rating: 4
          },
          {
            name: 'Lakshman Prabhu Naidu',
            rating: 5
          },
          {
            name: 'Surya Sivakumar',
            rating: 8
          },
          {
            name: 'Bharani Deepan',
            rating: 7
          },
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
