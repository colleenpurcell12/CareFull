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
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">CareFull</Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">

          {/* creating a dropdown for products */}
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Our Boxes <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">box type 1</a></li>
                    <li><a href="#">box type 2</a></li>
                    <li><a href="#">box type 3</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">separated section</a></li>
                  </ul>
                </li>

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
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */


export default connect(null, null)(Navbar);
