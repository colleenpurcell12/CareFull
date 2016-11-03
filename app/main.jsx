'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'

import AllProductsContainer from './containers/AllProductsContainer';
import ProductContainer from './containers/ProductContainer';

import fetchOneProduct from './action-creators/product';

//import ReviewsContainer from './containers/ReviewsContainer';
//onEnter={fetch/
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

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

function onProductEnter (nextRouterState) {
  console.log("HERE IN onProductEnter")
  store.dispatch( fetchOneProduct(nextRouterState.params.productId) );
}



render (
  <Provider store={store}>
    <Router history={browserHistory}>

     <Route path="/" >
     	  <IndexRedirect to="products" />
     	  <Route path="products" component={AllProductsContainer}/>
      	<Route path="products/:productId" component={ProductContainer} onEnter={onProductEnter} />
     </Route>

    </Router>
  </Provider>,
  document.getElementById('main')
)


