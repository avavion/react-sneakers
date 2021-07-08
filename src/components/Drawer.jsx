import DrawerHeader from "./Cart/CartHeader";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";
import CartTotal from "./Cart/CartTotal";

const Drawer = ({ onClose, items = [], onRemove }) => {
  return (
    <div className='overlay'>
      <div className='drawer d-flex col'>
        <DrawerHeader onClose={onClose} />

        {items.length === 0 ? (
          <CartEmpty onClose={onClose} />
        ) : (
          <>
            <ul className='cart'>
              {items.map((item, index) => (
                <CartItem
                  key={`cartItem_${index}`}
                  item={item}
                  onRemove={onRemove}
                />
              ))}
            </ul>

            <CartTotal />
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
