import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const App = () => {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const onAddToWishlist = (obj) => {
    setWishlistItems((prev) => [...prev, obj]);
  }

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  console.log(wishlistItems);

  useEffect(() => {
    fetch('https://60e3901a6c365a0017839302.mockapi.io/items')
      .then((response) => response.json())
      .then(data => setItems(data))
      .catch((error) => {
        return setItems([
          {
            name: "Мужские кроссовки",
            price: 12.999,
            image: "1.png"
          }
        ]);
      })
  }, [])

  return (
    <div className="wrapper">
      {cartIsOpen && <Drawer onClose={() => setCartIsOpen(false)} items={cartItems} />}
      <Header onClickCart={() => setCartIsOpen(true)} />
      <Slider />
      <section className="section collection">
        <div className="section-header">
          <h1 className="section-header__title">
            Все кроссовки
          </h1>
          <div className="search d-flex align-center">
            <img className="search__icon" width={14.25} height={14.25} src="media/icons/search.svg" alt="Search" />
            <input type="text" className="search__input" placeholder="Поиск..." />
          </div>
        </div>
        <ul className="cards">
          {items.map((item, index) =>
            <Card
              key={`item_${index}`}
              name={item.name}
              price={item.price}
              image={`/media/images/${item.image}`}
              onFavorite={(product) => onAddToWishlist(product)}
              onPlus={(product) => onAddToCart(product)}
            />
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;
