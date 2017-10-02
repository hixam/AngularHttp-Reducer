import { Component, OnInit } from '@angular/core';
import {ModelsInterview} from '../../Models/models.interview';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  interviewState: Observable<{interviews: ModelsInterview[]}>;

  constructor(private store: Store<{interviews: {interviews: ModelsInterview[]}}>) {
  }

  interviews= [];

  ngOnInit() {
    // this.interviews.push(new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'));
    // this.interviews.push(new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'));
    // this.interviews.push(new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'));
    // this.interviews.push(new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'));
    this.interviewState = this.store.select('interviews');
  }

}
