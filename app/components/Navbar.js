import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

export class Navbar extends Component {
 constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div>
         <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/*<Link className="navbar-brand" to="/"><img src="/logo.png" /></Link>*/}
            
          </div>
          <div className="collapse navbar-collapse">

            <ul className="nav navbar-nav">

              <li>
                <Link to="/products" activeClassName="active">Products</Link>
              </li>
             <li>
                <Link to="/login" activeClassName="active">Login</Link>
              </li>
              <li>
                <Link to="/signup" activeClassName="active">Sign Up</Link>
              </li>
              <li>
                <Link to="/cart" activeClassName="active">Cart</Link>
              </li>
              <li>
                <Link to="/order" activeClassName="active">Order History</Link>
              </li>
          </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */


export default connect(null, null)(Navbar);
