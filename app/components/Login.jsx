import React, { Component } from 'react';
import {Link} from 'react-router';

export class Login extends Component{
  componentDidMount() {
    this.props.fetchOrderDetails()
  }
  render() {
    return (
        <li className='dropdown'>

        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login/Sign Up<span className="caret"></span></a>

        <ul className='dropdown-menu'>
          <li>
            <form onSubmit={evt => {
              evt.preventDefault()
              this.props.login(evt.target.username.value, evt.target.password.value)
            }}>
            <input name="username" />
            <input name="password" type="password" />
            <input type="submit" value="Login" />
          </form>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <p>New user? Create an account</p>
            <Link to="/signup" activeClassName="active">Sign Up</Link>
          </li>
          
        </ul>

      </li>
    )
  }
} 



import {login} from 'APP/app/reducers/auth';
import { fetchOrderDetails } from 'APP/app/action-creators/cart'
import {connect} from 'react-redux'


export default connect (
  state => ({}),
  {login, fetchOrderDetails },
) (Login)
