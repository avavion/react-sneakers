import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import "./Card.module.scss";

const Card = ({ onAddToWishlist, id, image, name, price, onPlus, favorited = false, added = false, loading = false }) => {

  const [isAdded, setIsAdded] = useState(added);
  const [isWishlist, setIsWishlist] = useState(favorited);

  const onClickWishlist = () => {
    onAddToWishlist({ id, name, price, image });
    setIsWishlist(!isWishlist);
  }

  const onClickPlus = () => {
    onPlus({ id, image, name, price });
    setIsAdded(!isAdded);
  }

  return (

    <li className="card">
      {
        loading === false ? (<ContentLoader
          speed={2}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="120" rx="10" ry="10" width="90" height="15" />
          <rect x="0" y="155" rx="10" ry="10" width="80" height="24" />
          <rect x="118" y="147" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>) : (
          <>
            <button onClick={onClickWishlist} className={`button wishlist-button ${isWishlist && 'wishlist-button--liked'}`}>
              <img
                width={15}
                height={14}
                className='wishlist-button__icon'
                src={isWishlist ? `/media/icons/liked.svg` : `/media/icons/unliked.svg`}
                alt='Wishlist Button'
              />
            </button>

            <img
              className='card__image'
              width={`100%`}
              height={`100%`}
              src={`/media/images/${image}`}
              alt={name}
            />

            <div className='card-info'>
              <h3 className='card__title'>{name}</h3>
              <div className='d-flex space-between align-center'>
                <p className='card__price'>
                  Цена:
                  <span>{price} руб.</span>
                </p>
                <button onClick={onClickPlus} className={`button ${isAdded ? 'button--checked' : 'button--plus'} cart__button`}>
                  <img
                    width={11}
                    height={11}
                    src={`/media/icons/${isAdded ? 'checked' : 'plus'}.svg`}
                    alt='Plus'
                  />
                </button>
              </div>
            </div>
          </>
        )
      }

    </li>
  );
};

export default Card;
