import Card from "../components/Card/index";
import Loader from "../components/Loader";

const Wishlist = ({ items = [], onAddToWishlist }) => {
  return (
    <section className='section collection'>
      <div className='section-header'>
        <h1 className='section-header__title'>Мои закладки</h1>
      </div>
      {items.length > 0 ? (
        <ul className='cards'>
          {items.map((item, index) => (
            <Card
              key={`wishlist_item_${index}`}
              name={item.name}
              price={item.price}
              image={`${item.image}`}
              favorited={true}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Wishlist;
