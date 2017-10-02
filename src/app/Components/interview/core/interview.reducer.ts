import * as interviewActions from './interview.actions';
import {ModelsInterview} from '../../../Models/models.interview';



const initStat = {
  interviews : [
    new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'),
    new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'),
    new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'),
    new ModelsInterview('Giovani', 'Juan ramos', '15/05/2015'),
  ]
};

export function interviewReducer(state = initStat, action: interviewActions.interviewActions) {
  switch (action.type) {

    case interviewActions.ADD_INTERVIEW :
      return {
        ...state,
        interviews: [...state.interviews, action.payload]
      };
    case interviewActions.UPDATE_INTERVIEW :
      const ingredient = state.interviews[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.interview
      };
      const ingredients = [...state.interviews];
      ingredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        interviews: ingredients
      };
    default :
      return state;
  }
}
