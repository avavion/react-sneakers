import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className='section header' id='header'>
      <nav className='nav'>
        <Link to="/">
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
        </Link>

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
            <Link to="/wishlist">
              <img
                width={20}
                height={20}
                src='media/icons/wishlist.svg'
                alt='Wishlist'
              />
            </Link>
          </li>
          <li className='nav-list-item nav-user d-flex align-center'>
            <Link to="/profile">
              <img
                width={20}
                height={20}
                src='media/icons/user.svg'
                alt='Profile'
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
