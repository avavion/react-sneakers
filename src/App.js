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

      <div className="overlay">
        <div className="drawer d-flex col">
          <div className="drawer-header d-flex space-between align-center">
            <h2 className="drawer__title">
              Корзина
            </h2>

            <button className="drawer__button button button--remove">
              <img width={16} height={16} src="/media/icons/close.svg" alt="Close" />
            </button>
          </div>

          <ul className="cart">
            {/* Start */}
            <li className="cart-item">
              <div className="cart-item__wrapper d-flex align-center">
                <img width={70} height={70} className="cart-item__image" src="/media/images/1.png" alt="Cart Item" />
                <div className="d-flex col">
                  <h3 className="cart-item__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <p className="cart-item__price">12 999 руб.</p>
                </div>
                <button className="cart-item__button button button--remove">
                  <img width={16} height={16} src="/media/icons/close.svg" alt="Remove" />
                </button>
              </div>
            </li>
            <li className="cart-item">
              <div className="cart-item__wrapper d-flex align-center">
                <img width={70} height={70} className="cart-item__image" src="/media/images/2.png" alt="Cart Item" />
                <div className="d-flex col">
                  <h3 className="cart-item__title">
                    Мужские Кроссовки Nike Air Max 270
                  </h3>
                  <p className="cart-item__price">12 999 руб.</p>
                </div>
                <button className="cart-item__button button button--remove">
                  <img width={16} height={16} src="/media/icons/close.svg" alt="Remove" />
                </button>
              </div>
            </li>
            <li className="cart-item">
              <div className="cart-item__wrapper d-flex align-center">
                <img width={70} height={70} className="cart-item__image" src="/media/images/3.png" alt="Cart Item" />
                <div className="d-flex col">
                  <h3 className="cart-item__title">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </h3>
                  <p className="cart-item__price">8 499 руб.</p>
                </div>
                <button className="cart-item__button button button--remove">
                  <img width={16} height={16} src="/media/icons/close.svg" alt="Remove" />
                </button>
              </div>
            </li>
            <li className="cart-item">
              <div className="cart-item__wrapper d-flex align-center">
                <img width={70} height={70} className="cart-item__image" src="/media/images/4.png" alt="Cart Item" />
                <div className="d-flex col">
                  <h3 className="cart-item__title">
                    Кроссовки Puma X Aka Boku Future Rider
                  </h3>
                  <p className="cart-item__price">8 999 руб.</p>
                </div>
                <button className="cart-item__button button button--remove">
                  <img width={16} height={16} src="/media/icons/close.svg" alt="Remove" />
                </button>
              </div>
            </li>
            {/* End */}
          </ul>

          <div className="total">
            <ul className="total-list">

              <li className="total-item d-flex">
                <span className="total-item__title">Итого:</span>
                <div className="underline underline--dashed"></div>
                <span className="total-item__price">21 498 руб.</span>
              </li>

              <li className="total-item d-flex">
                <span className="total-item__title">Налог 5%:</span>
                <div className="underline underline--dashed"></div>
                <span className="total-item__price">1074 руб.</span>
              </li>

            </ul>
            <button type="submit" className="button button--green total__button">
              Оформить заказ
              <img src="/media/icons/arrow.svg" alt="Arrow" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

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
          {data.map((item, index) => {
            return (
              <li key={`item_${index}`} className="card">
                <button className={`button wishlist-button ${index % 2 === 0 ? `wishlist-button--liked` : ``}`}>
                  <img width={15} height={15} className="wishlist-button__icon" src={`/media/icons/${index % 2 === 0 ? `` : `un`}liked.svg`} alt="Liked" />
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
            )
          })}

        </ul>
      </section>
    </div>
  );
}

export default App;
