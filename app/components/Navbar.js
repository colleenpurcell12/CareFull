import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

export default class Navbar extends Component {
  render() { 
    return (
      <div>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar">Products</span>
              <span className="icon-bar">Login</span>
              <span className="icon-bar">Cart</span>
              <span className="icon-bar">Order History</span>
            </button>
            
              <Link className="navbar-brand" to="/">CareFull</Link>
            
          </div>

          <div className="collapse navbar-collapse">

            <ul className="nav navbar-nav">

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Our Boxes <span className="caret"></span></a>


                <li>  
                  <Link to="/login" activeClassName="active">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" activeClassName="active">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/cart" activeClassName="active">
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>  
                      Cart
                  </Link>
                </li>
                <li>
                  <Link to="/order" activeClassName="active">Order History</Link>
                </li>
              </ul>
            </li>
              <li>

              </li>
              <li>
                <Link to="/cart" activeClassName="active">
                  <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>  
                    Cart
                </Link>
              </li>
              <li>
                <Link to="/order" activeClassName="active">Order History</Link>
              </li>
            
              {this.props.loginButton}

          </ul>
        </div>
      </div>
    </nav>
    </div>

    )
  }
}


/* -----------------    CONTAINER     ------------------ */


// export default connect(null, null)(Navbar);
