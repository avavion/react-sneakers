import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

const App = () => {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const onAddToWishlist = async (obj) => {
    if (wishlistItems.find(wishlistObject => wishlistObject.id === obj.id)) {
      axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/wishlist/${obj.id}`);
      // setWishlistItems((prev) => prev.filter((item) => item.id !== obj.id))
    } else {
      const { data } = await axios.post(`https://60e3901a6c365a0017839302.mockapi.io/wishlist`, obj);
      setWishlistItems((prev) => [...prev, data]);
    }
  }

  const onAddToCart = async (obj) => {
    if (cartItems.find(cartItem => cartItem.id === obj.id)) {
      axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/cart/${obj.id}`);
    } else {
      const { data } = await axios.post(`https://60e3901a6c365a0017839302.mockapi.io/cart`, obj);
      setCartItems((prev) => [...prev, data]);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    axios.get(`https://60e3901a6c365a0017839302.mockapi.io/items`).then(response => setItems(response.data)).catch(setItems([]));
    axios.get(`https://60e3901a6c365a0017839302.mockapi.io/cart`).then(response => setCartItems(response.data)).catch(setItems([]));
    axios.get(`https://60e3901a6c365a0017839302.mockapi.io/wishlist`).then(response => setWishlistItems(response.data)).catch(setWishlistItems([]));
  }, []);

  return (
    <div className="wrapper">
      {cartIsOpen && <Drawer onClose={() => setCartIsOpen(false)} items={cartItems} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartIsOpen(true)} />

      <Route path="/" exact>
        <Slider />
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToWishlist={onAddToWishlist}
          onAddToCart={onAddToCart} />
      </Route>

      <Route path="/wishlist" exact>
        <Wishlist items={wishlistItems} onAddToWishlist={onAddToWishlist} />
      </Route>

    </div>
  );
}

export default App;
