import React from 'react'

export const WhoAmI = ({ user, logout }) => (

  <li className="whoami">
  <a href="#">
    Signed in as {user && user.name} 	&nbsp;
  	<button className="btn btn-default navbar-btn logout-button" onClick={logout}>Logout</button>
  </a>
  </li>

)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)