const CartItem = ({ item, onRemove }) => {
    return (
        <li className='cart-item'>
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
    )
}

export default CartItem;