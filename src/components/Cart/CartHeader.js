const DrawerHeader = ({ onClose }) => {
    return (
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
        </div>)
}

export default DrawerHeader;