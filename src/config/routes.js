import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../components/App/AppComponent';
import Main from '../components/Main/MainComponent';
import Tabs from '../components/Tabs/Tabs';
import Agenda from '../components/Agenda';

const history = createBrowserHistory();

const routes = () => (
  <Router history={history}>
    <App>
      <Route exact path="/">
        <Main>
          <Route exact path="/" component={Agenda} />
          <Route
            exact
            path="/patients/:id/clinical-overview"
            component={Tabs}
          />
        </Main>
      </Route>
    </App>
  </Router>
);

export default routes;
