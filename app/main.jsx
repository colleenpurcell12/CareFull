'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import SignUp from './components/signup'

render (
  <Provider store={store}>
    <SignUp/>

  </Provider>,
  document.getElementById('main')
)