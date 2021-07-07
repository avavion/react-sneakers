import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const URL = `https://60e3901a6c365a0017839302.mockapi.io`;

const App = () => {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const onAddToWishlist = (obj) => {
    setWishlistItems((prev) => [...prev, obj]);
  }

  const onAddToCart = (obj) => {
    axios.post(`${URL}/cart`, obj);
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`${URL}/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    axios.get(`${URL}/items`).then(response => setItems(response.data)).catch(setItems([]));
    axios.get(`${URL}/cart`).then(response => setCartItems(response.data)).catch(setItems([]));
  }, []);

  return (
    <div className="wrapper">
      {cartIsOpen && <Drawer onClose={() => setCartIsOpen(false)} items={cartItems} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartIsOpen(true)} />
      <Slider />
      <section className="section collection">
        <div className="section-header">
          <h1 className="section-header__title">
            {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}
          </h1>
          <div className="search d-flex align-center">
            <img className="search__icon" width={14.25} height={14.25} src="media/icons/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" className="search__input" placeholder="Поиск..." />
          </div>
        </div>
        {items.length > 0 ? <ul className="cards">
          {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>
            <Card
              key={`item_${index}`}
              name={item.name}
              price={item.price}
              image={`/media/images/${item.image}`}
              onFavorite={(product) => onAddToWishlist(product)}
              onPlus={(product) => onAddToCart(product)}
            />
          )}
        </ul> : <h1>Нет интернет подключения!</h1>}

      </section>
    </div>
  );
}

export default App;
