import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { HomePage } from './features/home';
import { Hello } from './features/hello';
import { CounterPage } from './features/counter';
import { NoMatch } from './features/not-match/NoMatch';
import NavBar from './common/components/NavBar';
import { BlogListPage, BlogArticlePage } from './features/blog';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/counter" component={CounterPage} />
      <Route exact path="/blog" component={BlogListPage} />
      <Route exact path="/blog/:id" component={BlogArticlePage} />
      <Route exact path="/404" component={NoMatch} />
      <Redirect to='/404' />
    </Switch>
  </div>
)

export default routes