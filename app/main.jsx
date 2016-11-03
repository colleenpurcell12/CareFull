'use strict'
import React from 'react'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import AllProductsContainer from './containers/AllProductsContainer';
import ProductContainer from './containers/ProductContainer';
import fetchOneProduct from './action-creators/product';
import fetchReviews from './action-creators/review';

import Root from './components/Root'
import Login from './components/Login'
import Signup from './components/signup'
import Cart from './components/Cart'
import Order from './components/Order'


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

function onProductEnter (nextRouterState) {
  store.dispatch( fetchOneProduct(nextRouterState.params.productId) );  //puts current product on the props
  store.dispatch( fetchReviews(nextRouterState.params.productId) );  //puts reviews on the props of the Product component
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>

     <Route path="/" component={Root}>
      <IndexRedirect to="products" />
      <Route path="products" component={AllProductsContainer}/>
        <Route path="products/:productId" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="cart" component={Cart} />
        <Route path="order" component={Order} />
      </Route>

    </Router>
  </Provider>

  ,
  document.getElementById('app')
)