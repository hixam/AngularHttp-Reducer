import { Action } from '@ngrx/store';
import {ModelsInterview} from '../../../Models/models.interview';

export const ADD_INTERVIEW = 'ADD_INTERVIEW';
export const UPDATE_INTERVIEW = 'UPDATE_INTERVIEW';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const DELETE_INTERVIEW = 'DELETE_INTERVIEW';

export class AddInterview implements Action {
  readonly type = ADD_INTERVIEW;
  constructor(public payload: ModelsInterview) {}
}

export class UpdateInterview implements Action {
  readonly type = UPDATE_INTERVIEW;
  constructor(public payload: {interview: ModelsInterview}) {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export class DeleteInterview implements Action {
  readonly type = DELETE_INTERVIEW;
}

export type interviewActions = AddInterview | UpdateInterview | StartEdit | StopEdit | DeleteInterview;
