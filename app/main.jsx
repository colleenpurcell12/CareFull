'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'

import AllProductsContainer from './containers/AllProductsContainer';
import ProductContainer from './containers/ProductContainer';
import ReviewsContainer from './containers/ReviewsContainer';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import Root from './components/Root'
import SignUp from './components/signup'

import {connect, Provider} from 'react-redux'
import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

const Main = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <div>
      {user ? <WhoAmI/> : <Login/>} 
      <Root />
    </div>
)


render (
  <Provider store={store}>
    <Router history={browserHistory}>

     <Route path="/" component={AllProductsContainer} />

      <Route path="/" component={Main} />
      <Route path="/login" component={Login} />      

    </Router>
  </Provider>,
  document.getElementById('main')
)


