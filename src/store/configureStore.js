import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware());
  return store;
};

export default configureStore;
