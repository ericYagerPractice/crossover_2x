import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Login from './pages/Login';
import Account from './pages/Account';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CourseOverview from './pages/CourseOverview';
import Checkout from './pages/PaymentProcessing';
import Admin from './pages/Admin';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Login' component={Login} />
        <Route exact path="/Account" component={Account} />
        <Route exact path='/Privacy' component={PrivacyPolicy}/>
        <Route exact path='/CourseOverview' component={CourseOverview} />
        <Route exact path='/Checkout' component={Checkout} />
        <Route exact path='/Admin' component={Admin} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
