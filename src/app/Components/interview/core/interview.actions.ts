import { Action } from '@ngrx/store';
import {ModelsInterview} from '../../../Models/models.interview';

export const ADD_INTERVIEW = 'ADD_INTERVIEW';
export const UPDATE_INTERVIEW = 'UPDATE_INTERVIEW';


export class AddInterview implements Action {
  readonly type = ADD_INTERVIEW;
  constructor(public payload: ModelsInterview) {}
}

export class UpdateInterview implements Action {
  readonly type = UPDATE_INTERVIEW;
  constructor(public payload: {index: number, interview: ModelsInterview}) {}
}

export type interviewActions = AddInterview | UpdateInterview;
