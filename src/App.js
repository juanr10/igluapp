import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import MainPage from './components/layout/MainPage';
import Feed from './components/layout/Feed';
import Chat from './components/layout/Chat';
import Video from './components/layout/Video';
import Resources from './components/layout/Resources';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/main-page" component={MainPage} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </Router>
  );
}

export default App;
