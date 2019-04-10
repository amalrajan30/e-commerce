import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact to='/' component={Home} />
                    <Route exact to='/login' component={Login} />
                    <Route exact to='/signup' component={Signup} />
                    <Route exact to='/cart' component={Cart} />
                </Switch>
            </React.Fragment>
        )
    }
}
