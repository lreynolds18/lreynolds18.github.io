import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import ChangelogReducer from  './reducers/ChangelogReducer';

const configureStore = () => {
  // Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory()
  
  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history)
  
  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    combineReducers({
      ChangelogReducer,
      router: routerReducer
    }),
    applyMiddleware(middleware)
  )
  return {
    store: store, 
    history: history
  };
};

export default configureStore;


