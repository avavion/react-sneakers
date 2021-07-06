const Header = (props) => {
  return (
    <header className='section header' id='header'>
      <nav className='nav'>
        <div className='nav-logo'>
          <img
            src='/media/images/logotype.png'
            width={40}
            height={40}
            alt='Logo'
            className='nav-logo__image'
          />
          <div>
            <h3 className='nav-logo__title'>React Sneakers</h3>
            <p className='nav-logo__subtitle'>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='nav-list d-flex align-center'>
          <li
            className='nav-list-item nav-cart d-flex align-center'
            onClick={props.onClickCart}
          >
            <img
              className='nav-cart__icon'
              width={20}
              height={20}
              src='media/icons/cart.svg'
              alt='Cart'
            />
            <span className='nav-cart__total'>1205 руб.</span>
          </li>
          <li className='nav-list-item nav-wishlist d-flex align-center'>
            <img
              width={20}
              height={20}
              src='media/icons/wishlist.svg'
              alt='Wishlist'
            />
          </li>
          <li className='nav-list-item nav-user d-flex align-center'>
            <img width={20} height={20} src='media/icons/user.svg' alt='User' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
