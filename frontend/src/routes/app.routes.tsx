import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard/index';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default AppRoutes;