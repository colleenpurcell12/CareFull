'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import AllProductsContainer from './containers/AllProductsContainer';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import Root from './components/Root'
import SignUp from './components/signup'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
     <Route path="/" component={} />
     <Route path="products" component={AllProductsContainer} />
     <Route path="products/:productsId" component={ProductContainer} >
        <Route path="reviews" component={ReviewsContainer} />
     </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)


