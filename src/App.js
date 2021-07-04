const data = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "1.png",
    price: 12.999
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    image: "2.png",
    price: 12.999
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "3.png",
    price: 8.499
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: "4.png",
    price: 8.999
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "1.png",
    price: 12.999
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    image: "2.png",
    price: 12.999
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "3.png",
    price: 8.499
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: "4.png",
    price: 8.999
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "1.png",
    price: 12.999
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    image: "2.png",
    price: 12.999
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "3.png",
    price: 8.499
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: "4.png",
    price: 8.999
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "1.png",
    price: 12.999
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    image: "2.png",
    price: 12.999
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: "3.png",
    price: 8.499
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: "4.png",
    price: 8.999
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <header className="section header" id="header">
        <nav className="nav">
          <div className="nav-logo">
            <img src="/media/images/logotype.png" width={40} height={40} alt="Logo" className="nav-logo__image" />
            <div>
              <h3 className="nav-logo__title">
                React Sneakers
              </h3>
              <p className="nav-logo__subtitle">
                Магазин лучших кроссовок
              </p>
            </div>
          </div>

          <ul className="nav-list d-flex align-center">
            <li className="nav-list-item nav-cart d-flex align-center">
              <img className="nav-cart__icon" width={20} height={20} src="media/icons/cart.svg" alt="Cart" />
              <span className="nav-cart__total">1205 руб.</span>
            </li>
            <li className="nav-list-item nav-wishlist d-flex align-center">
              <img width={20} height={20} src="media/icons/wishlist.svg" alt="Wishlist" />
            </li>
            <li className="nav-list-item nav-user d-flex align-center">
              <img width={20} height={20} src="media/icons/user.svg" alt="User" />
            </li>
          </ul>
        </nav>
      </header>
      <section className="section slider">
        <h2>Слайдер</h2>
      </section>

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
          {data.map((item, index) => (
          <li key={`item_${index}`} className="card">
            <button className="wishlist-button wishlist-button--liked">
              <img width={14.4} height={12.8} className="wishlist-button__icon" src="/media/icons/liked.svg" alt="Liked" />
            </button>
            <img className="card__image" width={`100%`} height={`100%`} src={`/media/images/${item.image}`} alt={item.title} />
            <div className="card-info">
              <h3 className="card__title">
                {item.title}
              </h3>
              <div className="d-flex space-between align-center">
                <p className="card__price">
                  Цена:
                  <span>{item.price} руб.</span>
                </p>
                <button className="button button--plus cart__button">
                  <img width={11} height={11} src="/media/icons/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </li>
          ))}

        </ul>
      </section>
    </div>
  );
}

export default App;
