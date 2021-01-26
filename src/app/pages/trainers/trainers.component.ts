import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trainers = [
    {
      name: 'Ananth Babu',
      image:'../../../assets/images/jack.png',
      empId: 'I08012',
      email: 'ananth.b@ideas2it.com',
      contactNo: '9850326147',
      designation: 'Technical Architect',
      experience: '12',
      stream: 'Development'
    },
    {
      name: 'Mohan Kumar',
      image:'../../../assets/images/alan.png',
      empId: 'I12062',
      email: 'mohan@ideas2it.com',
      contactNo: '7849563210',
      designation: ' Associate Technical Architect',
      experience: '8',
      stream: 'Development'
    },
    {
      name: 'Syed Sulaiman',
      image:'../../../assets/images/nick.png',
      empId: 'I12013',
      email: 'syed@ideas2it.com',
      contactNo: '8559637412',
      designation: ' Associate Technical Architect',
      experience: '8',
      stream: 'Development'
    },
    {
      name: 'Kiran Kumar',
      image:'../../../assets/images/alan.png',
      empId: 'I14088',
      email: 'kiran@ideas2it.com',
      contactNo: '9587421630',
      designation: 'Senior Test Engineer',
      experience: '6',
      stream: 'Quality Analysis'
    },
    {
      name: 'Raj Mohan',
      image:'../../../assets/images/nick.png',
      empId: 'I10018',
      email: 'raj,mohan@ideas2it.com',
      contactNo: '987456987',
      designation: 'Senior Software Engineer',
      experience: '10',
      stream: 'Development'
    },
    {
      name: 'Nijin',
      image:'../../../assets/images/jack.png',
      empId: 'I09023',
      email: 'nijin.r@ideas2it.com',
      contactNo: '8451729630',
      designation: 'Senior Test Engineer',
      experience: '11',
      stream: 'Quality Analysis'
    },
    {
      name: 'Navaneedh Krishna',
      image:'../../../assets/images/nick.png',
      empId: 'I17056',
      email: 'navaneeth.k@ideas2it.com',
      contactNo: '987456987',
      designation: 'Senior Software Engineer',
      experience: '3',
      stream: 'Development'
    },
    {
      name: 'Suresh Kumar',
      image:'../../../assets/images/alan.png',
      empId: 'I11043',
      email: 'raj,mohan@ideas2it.com',
      contactNo: '987456987',
      designation: 'Senior Software Engineer',
      experience: '9',
      stream: 'Development'
    },
    {
      name: 'Ram Balaji',
      image:'../../../assets/images/jack.png',
      empId: 'I14066',
      email: 'ram.balaji@ideas2it.com',
      contactNo: '9597845623',
      designation: 'Senior Test Engineer',
      experience: '6',
      stream: 'Quality Analysis'
    },
    {
      name: 'Muniraj',
      image:'../../../assets/images/nick.png',
      empId: 'I16013',
      email: 'muniraj.k@ideas2it.com',
      contactNo: '9785412630',
      designation: 'Senior Software Engineer',
      experience: '4',
      stream: 'Development'
    },
    {
      name: 'Prashanth',
      image:'../../../assets/images/alan.png',
      empId: 'I13096',
      email: 'prashant.l@ideas2it.com',
      contactNo: '8451209637',
      designation: 'Senior Test Engineer',
      experience: '7',
      stream: 'Quality Analysis'
    },
    {
      name: 'Kabilan',
      image:'../../../assets/images/jack.png',
      empId: 'I10003',
      email: 'kabilan.k@ideas2it.com',
      contactNo: '8459761230',
      designation: 'Senior Software Engineer',
      experience: '10',
      stream: 'Development'
    },
  ]

}
