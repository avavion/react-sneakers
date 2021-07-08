const CartTotal = () => {
    return (
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
    )
}

export default CartTotal;