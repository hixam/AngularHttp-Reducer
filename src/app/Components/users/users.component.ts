import { Component, OnInit } from '@angular/core';
import {ModelsUser} from '../../Models/models.user';
import {ModelsInterview} from '../../Models/models.interview';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor( private store: Store<{interviews: {interviews: ModelsInterview[]}}>) { }

  users= [];
  ngOnInit() {
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  this.users.push(new ModelsUser('Iker', 'mail@mail.com', '654789654'));
  }


}
