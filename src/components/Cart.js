import React from 'react';
import './css/Cart.css';

export default function Cart({ cartItems, remove }) {
  console.log(cartItems);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div classNae="cart cart-header">
          <h1>Cart is empty</h1>
        </div>
      ) : (
        <>
          <div className="cart cart-header">
            <h1> You Have {cartItems.length} item in the cart </h1>
          </div>

          <div className="cart">
            <ul className="cart-items">
              {cartItems.map(cartitem => {
                return (
                  <li key={cartitem._id}>
                    <div>
                      <img src={cartitem.image} alt={cartitem.title} />
                    </div>
                    <div>
                      <div>{cartitem.title}</div>
                      <div className="right">
                        {cartitem.price} x {cartitem.count}{' '}
                        <button
                          className="button"
                          onClick={() => {
                            remove(cartitem._id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
