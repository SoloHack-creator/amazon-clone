import './Product.css';

import React from 'react';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
  //  const [state, dispatch] = useStateValue();
  // from component we will dispatch an action to reducer  which will update the state
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product ">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} className="product__image" alt=""></img>

      <button onClick={addToBasket} className="product__button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
