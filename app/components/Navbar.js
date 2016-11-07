import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import store from '../store'

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top">
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


          </div>

          <div className="collapse navbar-collapse">

            <ul className="nav navbar-nav">

            <li>
              <Link className="" to="/products">Home</Link>
            </li>

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

              </li>
              <li>
                <Link to="/cart" activeClassName="active">
                  {/*<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>*/}
                    Cart
                </Link>
              </li>
              <li>
                <Link to="/order" activeClassName="active">Order History</Link>
              </li>

              {store.getState().auth && store.getState().auth.isAdmin ? <li><Link className="" to="/dashboard">Admin Dashboard</Link></li> : null}

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
