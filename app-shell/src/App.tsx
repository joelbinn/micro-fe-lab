import React, { FC } from 'react'
import './App.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const App: FC = () => (
  <Router>
    <div>
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
      </Switch>
    </div>
  </Router>
)

export default App
