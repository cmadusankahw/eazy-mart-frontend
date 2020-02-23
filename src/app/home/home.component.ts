import { Component, OnInit } from '@angular/core';

export interface Event {
  id: string;
  title: string;
  category: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  no_of_participants: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[] = [
    {id: '001', title: 'hackX 2020', category: 'IT', type: 'open', date:'13/03/2020'  , time: '11:50 AM', venue: 'BMICH', no_of_participants: 70},
    {id: '002', title: 'Exposition 2020', category: 'MgMt', type: 'open', date:'13/09/2020'  , time: '10:00 AM', venue: 'BMICH', no_of_participants: 125}
  ];

  constructor() { }

  ngOnInit() {
  }

  show(){
    window.alert('event created!');
  }

  modifyEvent(){
    
  }
}
