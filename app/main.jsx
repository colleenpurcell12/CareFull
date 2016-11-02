'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import AllProductsContainer from './containers/AllProductsContainer';
import ProductContainer from './containers/ProductContainer';

import fetchOneProduct from './action-creators/product';

//import ReviewsContainer from './containers/ReviewsContainer';
//onEnter={fetch/
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import Root from './components/Root'
import SignUp from './components/signup'

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


