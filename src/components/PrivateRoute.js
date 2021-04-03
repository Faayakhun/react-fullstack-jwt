import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Cart from '../pages/Cart'

function PrivateRoute() {
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    return (
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/cart">
            {isLoggedIn ? <Cart /> : <Redirect to ='/login'/>}
          </Route>
        </Switch>
    )
}

export default PrivateRoute
