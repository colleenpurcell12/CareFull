import React from 'react';
import {Link} from 'react-router';

export const Login = ({ login }) => (
  <div>
    <h2>Login</h2>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
    <p>New user? Create an account</p>
    <Link to="/signup" activeClassName="active">Sign Up</Link>

  </div>
 )

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'


export default connect (
  state => ({}),
  {login},
) (Login)
