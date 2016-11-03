import React, { Component } from 'react';
import {Link} from 'react-router';

export default ({products, filter, handleChange}) => (
  <div>
    <h1>Products</h1>
    {/* //image, caption, price, button add to cart */}
    <input 
      type='text'
      value={filter}
      placeholder='search by name'
      onChange={handleChange}
    />
    <ul> {
      products && products.map( (product, idx) =>
        <li key={idx}> {/*key={product.id}*/}
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      )
    } </ul>
  </div>
)
