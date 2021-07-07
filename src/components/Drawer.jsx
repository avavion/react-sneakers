const Drawer = ({ onClose, items = [], onRemove }) => {
  return (
    <div className='overlay'>
      <div className='drawer d-flex col'>
        <div className='drawer-header d-flex space-between align-center'>
          <h2 className='drawer__title'>Корзина</h2>

          <button
            onClick={onClose}
            className='drawer__button button button--remove'
          >
            <img
              width={16}
              height={16}
              src='/media/icons/close.svg'
              alt='Close'
            />
          </button>
        </div>

        <ul className='cart'>
          {items.map((item, index) => {
            return (
              <li key={`cartItem_${index}`} className='cart-item'>
                <div className='cart-item__wrapper d-flex align-center'>
                  <img
                    width={70}
                    height={70}
                    className='cart-item__image'
                    src={`${item.image}`}
                    alt='Cart Item'
                  />
                  <div className='d-flex col'>
                    <h3 className='cart-item__title'>{item.name}</h3>
                    <p className='cart-item__price'>{item.price} руб.</p>
                  </div>
                  <button
                    className='cart-item__button button button--remove'
                    onClick={() => onRemove(item.id)}
                  >
                    <img
                      width={16}
                      height={16}
                      src='/media/icons/close.svg'
                      alt='Remove'
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className='total'>
          <ul className='total-list'>
            <li className='total-item d-flex'>
              <span className='total-item__title'>Итого:</span>
              <div className='underline underline--dashed'></div>
              <span className='total-item__price'>21 498 руб.</span>
            </li>

            <li className='total-item d-flex'>
              <span className='total-item__title'>Налог 5%:</span>
              <div className='underline underline--dashed'></div>
              <span className='total-item__price'>1074 руб.</span>
            </li>
          </ul>
          <button type='submit' className='button button--green total__button'>
            Оформить заказ
            <img
              src='/media/icons/arrow.svg'
              alt='Arrow'
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
