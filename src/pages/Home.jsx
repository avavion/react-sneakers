import Card from "../components/Card";
import Loader from "../components/Loader";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToWishlist,
  onAddToCart,
}) => {
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
      {items.length > 0 ? (
        <ul className='cards'>
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={`item_${index}`}
                onAddToWishlist={(product) => onAddToWishlist(product)}
                onPlus={(product) => onAddToCart(product)}
                {...item}
              />
            ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Home;
