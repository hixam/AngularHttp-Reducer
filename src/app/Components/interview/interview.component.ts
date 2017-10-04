import { Component, OnInit, OnDestroy } from '@angular/core';
import {ModelsInterview} from '../../Models/models.interview';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as interviewActions from './core/interview.actions';
import {NgForm} from '@angular/forms';
import {InterviewService} from './service/interview.service';
import * as fromInterviewList from './core/interview.reducer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit, OnDestroy {

  interviewState: Observable<{interviews: ModelsInterview[]}>;
  subscription: Subscription;

  constructor(private interviewService: InterviewService, private store: Store<fromInterviewList.AppState>) {
  }

  interviews= [];
  ModifyEnabled = false;
  count ;
  name= '';
  vacant= '';
  result;
  editedItem: ModelsInterview;

  ngOnInit() {
     this.interviewState = this.store.select('interviewsList');
    this.subscription = this.store.select('interviewsList')
      .subscribe(
        (res) => {
            if (res.editedInterviewIndex > -1) {
              this.editedItem = res.editedInterview;
              this.count = res.editedInterviewIndex;
              this.ModifyEnabled = true;
              this.name = this.editedItem.userName;
              this.vacant = this.editedItem.vacantName;
            }else {
              this.ModifyEnabled = false;
            }
        }
      );
  }

  interviewSelected(interviewId: number) {
    console.log('Selected ' + interviewId);
    this.store.dispatch(new interviewActions.StartEdit(interviewId));

    // this.name = interview.userName;
    // this.vacant = interview.vacantName;
    // this.count = interviewId;
    // this.ModifyEnabled = true;
  }

  UpdateInterview(formData: NgForm) {

    const value = formData.value;
    const newInterview = new ModelsInterview(value.newnameInput, value.newvacantInput, '' + Date.now());
    // On Update pass the index of the object to modify and new values
    this.store.dispatch(new interviewActions.UpdateInterview(
      {interview : newInterview}
    )
  );
  }

  Unclick() {
    console.log(this.count);
    // this.count = null;
    // this.ModifyEnabled = false;
  }

  onAdd() {
    this.interviewService.AddInterview().subscribe(
      res => {
        this.result = res.args.name;
        console.log('res is -----' + this.result);
      },
      err => console.log( 'error !!!!!!!!!' + err),
      () => {
        this.store.dispatch(new interviewActions.AddInterview(
          new ModelsInterview( 'from users', 'from' + this.result, '' + Date.now())));
      }
    );
  }

  ngOnDestroy() {
   this.store.dispatch(new interviewActions.StopEdit());
  }

}
