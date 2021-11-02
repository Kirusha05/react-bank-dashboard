import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <DashboardPage />
        </Route>
        <Route path="/messages" exact>
          <ChatPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
