import { Component, OnInit } from '@angular/core';
import {ModelsUser} from '../../Models/models.user';
import {ModelsInterview} from '../../Models/models.interview';
import {Store} from '@ngrx/store';
import * as interviewActions from '../interview/core/interview.actions';
import {InterviewService} from '../interview/service/interview.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private interviewService: InterviewService, private store: Store<{interviews: {interviews: ModelsInterview[]}}>) { }

  users= [];
  result;
  ngOnInit() {
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  }

  onAdd() {
    this.interviewService.AddInterview().subscribe(
      res => {

        console.log('res is -----' + res.RestResponse.result.name);
        this.result = res.RestResponse.result.name;

      },
      err => console.log( 'error !!!!!!!!!' + err),
      () => {
        this.store.dispatch(new interviewActions.AddInterview(
          new ModelsInterview( 'from users', 'from users', 'from' + this.result)));
      }
    );


  }
}
