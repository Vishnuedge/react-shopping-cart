import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

import data from './data.json';

function App() {
  const [products] = useState(data.products);
  let [cartItems, setCartItems] = useState([]);
  let [cartItemsLength, setCartItemsLength] = useState([]);
  const [size, setSize] = useState(0);

  //HANDLE REMOVE :

  const remove = productid => {
    let cartitem = cartItems.slice();

    setCartItems(cartitem.filter(x => x._id !== productid));
  };

  // HANDLE ADD TO CART :

  const addtoCart = product => {
    let itemsInCart = cartItems.slice();
    let alreadyInCart = false;
    itemsInCart.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsInCart.push({ ...product, count: 1 });
    }
    setCartItems(itemsInCart);
    // setCartItems(cartItems.length);
  };

  return (
    <div className="grid-conatiner">
      <header>
        <a href="#">SHOPIFY</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} addtoCart={addtoCart} />
          </div>

          <div className="cart-divider">
            <Cart cartItems={cartItems} remove={remove} />
          </div>
        </div>
      </main>
      <footer>All right is reserverd</footer>
    </div>
  );
}

export default App;
