import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToWishlist,
  onAddToCart,
  cartItems,
  isReady,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isReady ? filtredItems : [...Array(12)]).map((item, index) => (
      <Card
        key={`item_${index}`}
        onAddToWishlist={(product) => onAddToWishlist(product)}
        onPlus={(product) => onAddToCart(product)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isReady}
        {...item}
      />
    ));
  };

  return (
    <section className='section collection'>
      <div className='section-header'>
        <h1 className='section-header__title'>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}
        </h1>
        <div className='search d-flex align-center'>
          <img
            className='search__icon'
            width={14.25}
            height={14.25}
            src='media/icons/search.svg'
            alt='Search'
          />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type='text'
            className='search__input'
            placeholder='Поиск...'
          />
        </div>
      </div>
      <ul className='cards'>{renderItems()}</ul>
    </section>
  );
};

export default Home;
