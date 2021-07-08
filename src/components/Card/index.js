import React, { useState } from "react";

import "./Card.module.scss";

const Card = ({ onFavorite, image, name, price, onPlus }) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const onClickWishlist = () => {
    onFavorite({ name, price, image });
    setIsWishlist(!isWishlist);
  }

  const onClickPlus = () => {
    onPlus({ image, name, price });
    setIsAdded(!isAdded);
  }

  return (
    <li className='card'>
      <button onClick={onClickWishlist} className={`button wishlist-button ${isWishlist && 'wishlist-button--liked'}`}>
        <img
          width={15}
          height={14}
          className='wishlist-button__icon'
          src={isWishlist ? `/media/icons/liked.svg` : `/media/icons/unliked.svg`}
          alt='Wishlist Button'
        />
      </button>

      {/* <button onClick={onClickWishlist} className='button wishlist-button wishlist-button--liked'>
        <img
          width={15}
          height={15}
          className='wishlist-button__icon'
          src='/media/icons/liked.svg'
          alt='Liked'
        />
      </button> */}
      <img
        className='card__image'
        width={`100%`}
        height={`100%`}
        src={image}
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
    </li>
  );
};

export default Card;
