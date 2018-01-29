import { ADD_TO_OUTPUT } from './OutputActionTypes';

const addToOutput = value => ({
  type: ADD_TO_OUTPUT,
  payload: value,
});

export { addToOutput };
