import React from 'react';
import './css/Products.css';

export default function Products({ products, addtoCart }) {
  return (
    <div>
      <ul className="products">
        {products.map(product => (
          <li key={product._id}>
            <div className="product">
              <a href={'#' + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className="product_price">
                <div> {product.price} </div>
                <button
                  onClick={() => addtoCart(product)}
                  className="button-primary"
                >
                  {' '}
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
