import React from 'react'

export const WhoAmI = ({ user, logout }) => (

  <li className="whoami">
    <span className="whoami-user-name">Welcome, {user && user.name} </span>
  </li>

)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)