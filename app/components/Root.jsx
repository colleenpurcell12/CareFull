import React from 'react';
import Navbar from './Navbar';
//import Footer from './Footer';

//the children are the Routes inside Route path Root
export default ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
    
  </div>
);