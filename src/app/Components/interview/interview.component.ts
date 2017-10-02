import { Component, OnInit } from '@angular/core';
import {ModelsInterview} from '../../Models/models.interview';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as interviewActions from './core/interview.actions';
import {NgForm} from '@angular/forms';

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
  ModifyEnabled = false;
  count ;
  name= '';
  vacant= '';

  ngOnInit() {
    this.interviewState = this.store.select('interviews');
  }

  interviewSelected(interviewId: number, interview: ModelsInterview) {
    console.log('Selected ' + interviewId + ' name : ' + interview.userName + ' vacant : ' + interview.vacantName);
    this.name = interview.userName;
    this.vacant = interview.vacantName;
    this.count = interviewId;
    this.ModifyEnabled = true;
  }

  UpdateInterview(formData: NgForm) {

    // On Update pass the index of the object to modify and new values
    this.store.dispatch(new interviewActions.UpdateInterview(
      {index: this.count, interview : new ModelsInterview( formData.form.controls.newnameInput.value, formData.form.controls.newvacantInput.value, '' + Date.now())}
    ));
    this.count = null;
    this.ModifyEnabled = false;
  }

  Unclick() {
    console.log(this.count);
    // this.count = null;
    // this.ModifyEnabled = false;
  }

}
