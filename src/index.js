import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

//Component
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose } from 'redux';

class Root extends React.Component {
    render() {
       const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
       const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
        return(
               <Provider  store={store}>
                <BrowserRouter>
                   <Switch>
                      <Route path="/" component={App} />
                   </Switch>
                </BrowserRouter>
              </Provider>
          );
       }
   }
 
 ReactDOM.render(<Root />, document.getElementById('root'));
 serviceWorker.unregister();
