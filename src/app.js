import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Navigation from './components/Navigation'
import Home from './routes/Home'
import About from './routes/About'
import Sample from './routes/Sample'
import ReactNSample from './routes/ReactNSample'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/sample" component={Sample}/>
        <Route path="/reactn" component={ReactNSample}/>
      </Switch>
    </Router>
  </Fragment>
)
