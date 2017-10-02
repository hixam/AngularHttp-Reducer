import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModelsInterview} from './Models/models.interview';
import * as interviewActions from './Components/interview/core/interview.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<{interviews: {interviews: ModelsInterview[]}}>) {}

  onAdd() {
    this.store.dispatch(new interviewActions.AddInterview(
      new ModelsInterview( 'from root', 'from root', 'from root')));
  }

}
