import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    //  const [state, dispatch] = useStateValue();
    // from component we will dispatch an action to reducer  which will update the state
    //console.log('inside check out+ ' + id, title, price, rating, image)
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      //  console.log(id)
        dispatch({

            type: 'REMOVE_FROM_BASKET',
            id: id

        });

    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>
                                (<p>⭐</p>))
                    }
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
