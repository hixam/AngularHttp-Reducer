import * as interviewActions from './interview.actions';
import {ModelsInterview} from '../../../Models/models.interview';

export interface AppState {
  interviewsList: State;
}

export interface State {
  interviews: ModelsInterview[];
  editedInterview: ModelsInterview;
  editedInterviewIndex: number;
}

const initStat: State = {
  interviews : [
    new ModelsInterview('Giovani', 'Juan ramos', '' + Date.now()),
    new ModelsInterview('Giovani', 'Juan ramos', '' + Date.now()),
    new ModelsInterview('Giovani', 'Juan ramos', '' + Date.now()),
    new ModelsInterview('Giovani', 'Juan ramos', '' + Date.now()),
  ],
  editedInterview: null,
  editedInterviewIndex: -1
};

export function interviewReducer(state = initStat, action: interviewActions.interviewActions) {
  switch (action.type) {

    case interviewActions.ADD_INTERVIEW :
      return {
        ...state,
        interviews: [...state.interviews, action.payload]
      };
    case interviewActions.UPDATE_INTERVIEW :
      const ingredient = state.interviews[state.editedInterviewIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.interview
      };
      const ingredients = [...state.interviews];
      ingredients[state.editedInterviewIndex] = updatedIngredient;
      return {
        ...state,
        interviews: ingredients,
        editedInterview: null,
        editedInterviewIndex: -1
      };
    case interviewActions.START_EDIT :
      const editedIngredient = {...state.interviews[action.payload]};
      return {
        ...state,
        editedInterview: editedIngredient,
        editedInterviewIndex: action.payload
      };
    case interviewActions.STOP_EDIT:
      return{
        ...state,
        editedInterview : null,
        editedInterviewIndex : -1
      };
    default :
      return state;
  }
}
