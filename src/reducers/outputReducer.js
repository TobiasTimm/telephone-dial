import { ADD_TO_OUTPUT } from '../actions/OutputActionTypes';

function outputReducer(state = '', action) {
  switch (action.type) {
    case ADD_TO_OUTPUT:
      return [state, action.payload].join('');
    default:
      return state;
  }
}

export default outputReducer;
