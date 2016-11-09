import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer container-fluid'>
        <div className='col-md-4'>
          <h4>About</h4><br/>
          CareFull is:<br/>
          Sharon Choe<br/>
          Freda Ding<br/>
          Rachael Hobbs<br/>
          Colleen Purcell<br/>

        </div>

        <div className='col-md-4'>
          <h4>Need Help?</h4><br/>
            Shipping Policies<br/>
            Return Policies<br/>
        </div>
        <div className='col-md-4'>
          <address>
              <strong><h4>Contact CareFull</h4></strong><br/>
              5 Hanover Sq., 11th Floor<br/>
              New York, NY 10004<br/>
              <abbr title="Phone">P:</abbr> (123) 456-7890<br/>
              <abbr title="Phone">E:</abbr> hello@carefull.com
          </address>
        </div>        
      </div>
    )
  }
}

