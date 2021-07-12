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
  const [isReady, setIsReady] = useState(false);

  const onAddToWishlist = async (obj) => {
    try {
      if (wishlistItems.find(wishlistObject => Number(wishlistObject.id) === Number(obj.id))) {
        axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/wishlist/${obj.id}`);
      } else {
        const { data } = await axios.post(`https://60e3901a6c365a0017839302.mockapi.io/wishlist`, obj);
        setWishlistItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное!");
      console.error(`Ошибка добавления товара в избранное. ${error}`);
    }
  }

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(cartItem => Number(cartItem.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/cart/${obj.id}`);
      } else {
        const { data } = await axios.post(`https://60e3901a6c365a0017839302.mockapi.io/cart`, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавление товара в корзину!");
      console.error(`Ошибка при добавление товара в коризну. ${error}`);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60e3901a6c365a0017839302.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {

    async function fetchData() {
      setIsReady(false);

      const { data: items } = await axios.get(`https://60e3901a6c365a0017839302.mockapi.io/items`);
      const { data: cartItems } = await axios.get(`https://60e3901a6c365a0017839302.mockapi.io/cart`);
      const { data: wishlistItems } = await axios.get(`https://60e3901a6c365a0017839302.mockapi.io/wishlist`);

      setIsReady(true);

      setCartItems(cartItems);
      setWishlistItems(wishlistItems);
      setItems(items);
    }

    fetchData();
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
          onAddToCart={onAddToCart}
          cartItems={cartItems}
          isReady={isReady}
        />
      </Route>

      <Route path="/wishlist" exact>
        <Wishlist items={wishlistItems} onAddToWishlist={onAddToWishlist} />
      </Route>

    </div>
  );
}

export default App;
