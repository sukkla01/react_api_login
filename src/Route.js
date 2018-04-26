import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Login from './Login'


export default () => (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route  path="/about" component = { About } />
        <Route  path="/login" component = { Login } />
    </Switch>
)