import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModelsUser} from '../../../Models/models.user';
import {Store} from '@ngrx/store';
import * as fromInterviewList from '../../interview/core/interview.reducer';
import * as interviewActions from '../../interview/core/interview.actions';
import {ModelsInterview} from '../../../Models/models.interview';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private router: Router, private store: Store<fromInterviewList.AppState>) { }
  inputName;
  inputEmail;
  sel1;
  sel12;
  ngOnInit() {
  }

  onAddUser (form: NgForm) {
  console.log('form is ' + form);
  const interview = new ModelsInterview(form.value.inputName, form.value.inputEmail, form.value.inputDate);
  this.store.dispatch(new interviewActions.AddInterview(interview));
  this.router.navigate(['/']);
  }
}
