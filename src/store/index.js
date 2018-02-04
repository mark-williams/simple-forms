import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers(
  {
    dummy: (state = {}) => (state),
    form: formReducer
  }
);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
