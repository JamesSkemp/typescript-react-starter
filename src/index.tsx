import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
//import Hello from './components/Hello';
//import Hello from './components/StatefulHello';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { EnthusiasmAction } from './actions/index'
import { StoreState } from './types/index';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
},);

/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/
ReactDOM.render(
  //<Hello name="TypeScript" enthusiasmLevel={10} />,
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
