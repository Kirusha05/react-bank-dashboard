import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <DashboardPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
