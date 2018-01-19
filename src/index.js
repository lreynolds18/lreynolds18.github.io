import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import configureStore from './configureStore';

const values = configureStore();
const store = values.store;
const history = values.history;


render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
