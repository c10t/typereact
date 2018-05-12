import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import typeApp from "./reducers";

import TypeReact from "./components/TypeReact";
import NotFound from "./components/NotFound";

let store = createStore(typeApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TypeReact} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
