import React, { Component } from 'react';
import {Link} from 'react-router';

export default ({products, filter, handleChange, postItemToCart}) => (
  <div>

      <div>

        <div className="row jumbotron">
          <h1>Get ready for Black Box Friday</h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>

        <div className="panel col-md-2 ">
          <div className="panel-heading"><h3>Categories</h3></div>
          <div className="panel-body">
            <p>descriptive text</p>

            <input 
              type='text'
              value={filter}
              placeholder='search by name'
              onChange={handleChange}
            />


        </div>
        <ul className="list-group">
          <li className="list-group-item">All Products</li>
          <li className="list-group-item">Snackboxes</li>
          <li className="list-group-item">Craftboxes</li>
        </ul>
      </div>

      <div className='col-md-1'>
      </div>

          <ul className='list-unstyled'> {
            products && products.map( (product, idx) =>
              <li key={idx} className='product col-md-3'> 
                <Link to={`/products/${product.id}`} className='product-name'>
                  {product.name}
                  <img src='sample.jpg'></img>
                </Link>
                <p>${product.price}</p>
                <button onClick={ () => postItemToCart(product) } className='btn btn-default'>add to cart</button>
              </li>
            )
          } 
          </ul>

      </div>
  </div>
)

