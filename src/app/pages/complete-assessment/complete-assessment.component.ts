import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';

@Component({
  selector: 'ngx-complete-assessment',
  templateUrl: './complete-assessment.component.html',
  styleUrls: ['./complete-assessment.component.scss']
})
export class CompleteAssessmentComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  editField: string; 
  assessment = {
    title : '#ASMT-1 Layered micro application with coding guidelines',
    description : 'The Implementation & Integration of the Hibernate ORM will be reviewed. Hibernate ORM (or simply Hibernate) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate handles object-relational impedance mismatch problems by replacing direct, persistent database accesses with high-level object handling functions.',
    heldOn : '22/01/2021',
    assessedSkill : 'Programming',
    mentor : 'Ananth Babu',
    traineeAssmntsDetail:  [
      { traineeId: 'I19018',
        traineeName: 'Sathish Varma',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
      { traineeId: 'I19015',
        traineeName: 'Balaji Parimelazhagan',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
      { traineeId: 'I19019',
        traineeName: 'Mani Bharathi',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
      { traineeId: 'I19016',
        traineeName: 'Bala Kumaran',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
      { traineeId: 'I19017',
        traineeName: 'Lakshman Prabhu Naidu',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
      { traineeId: 'I19020',
        traineeName: 'Mukesh Ambhani',
        metric_1: {
          rating: 0,
          comments: 'Comments given'
        }, 
        metric_2: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_3: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_4: {
          rating: 0,
          comments: 'Comments given'
        },
        metric_5: {
          rating: 0,
          comments: 'Comments given'
        },
        totalRatings: 0
      },
    ] }
    
    updateAsssmntRating(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      const targetElement = this.assessment.traineeAssmntsDetail[id];
      targetElement[property].rating = editField;
      targetElement.totalRatings = +targetElement.metric_1.rating + +targetElement.metric_2.rating + +targetElement.metric_3.rating + +targetElement.metric_4.rating + +targetElement.metric_5.rating;
    }

    openCommentsModal(index) {
      this.dialogService.open(CommentsModalComponent)
          .onClose.subscribe(comments => {
            this.assessment.traineeAssmntsDetail[index].metric_1.comments = comments.metricOne;
            this.assessment.traineeAssmntsDetail[index].metric_2.comments = comments.metricTwo;
            this.assessment.traineeAssmntsDetail[index].metric_3.comments = comments.metricThree;
            this.assessment.traineeAssmntsDetail[index].metric_4.comments = comments.metricFour;
            console.log('assessment', this.assessment)
          });
    }

}
