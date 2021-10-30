import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <h1>Dashboard</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
