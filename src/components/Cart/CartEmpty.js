const CartEmpty = ({ onClose }) => {
    return (
        <div className='cartEmpty'>
            <img
                src='/media/images/box.png'
                alt='Empty Cart'
                width={120}
                height={120}
            />
            <h3 className='cartEmpty__title'>Корзина пустая</h3>
            <p className='cartEmpty__text'>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className='button button--green cartEmpty__button' onClick={onClose}>
                Вернуться назад
                <img
                    src='/media/icons/arrow.svg'
                    alt='Arrow'
                    width={14}
                    height={14}
                />
            </button>
        </div>
    )
}

export default CartEmpty;