import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PostList from './PostList';
import PostShow from './PostShow';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>
      <Route path="/:postId" exact>
        <PostShow />
      </Route>
    </Switch>
  </Router>
);

export default App;
