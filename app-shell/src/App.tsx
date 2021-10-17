import React, { FC } from 'react'
import './App.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const App: FC = () => (
  <Router>
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/doodle">Doodle</a>
      </nav>
      <div className="widget-area">
        <tdo-widget/>
      </div>
      <hr/>
      <div className="page-area">
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/inspire"/>
          </Route>
          <Route path="/inspire">
            <inspire-pages/>
          </Route>
          <Route path="/product">
            <decide-pages/>
          </Route>
          <Route path="/doodle">
            <tdo-page/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)

export default App
