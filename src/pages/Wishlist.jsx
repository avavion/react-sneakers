import Card from "../components/Card/index";

const Wishlist = ({ items = [], onAddToWishlist, isReady }) => {
  const renderItems = () => {
    return (isReady ? items : [...Array(12)]).map((item, index) => (
      <Card
        key={`wishlist_item_${index}`}
        favorited={true}
        onAddToWishlist={onAddToWishlist}
        loading={isReady}
        {...item}
      />
    ));
  };

  return (
    <section className='section collection'>
      <div className='section-header'>
        <h1 className='section-header__title'>Мои закладки</h1>
      </div>
      <ul className='cards'>{renderItems()}</ul>
    </section>
  );
};

export default Wishlist;
