import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index';


let configureStore = () => {
  let middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];

  let store;
  if(window.devToolsExtension) {
    store = createStore(
      rootReducer,
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension()
      )
    );
  } else {
    store = createStore(
      rootReducer,
      applyMiddleware(...middlewares)
    );
  }

  return store
};

export default configureStore;
