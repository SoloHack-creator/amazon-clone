import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(order.data.created).format('ddd DD-MMM-YYYY, hh:mm A')}
      </p>
      <p className="order__id">
        <small>orderId:{order.id}</small>
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            hidebutton
          />
        ))}

        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Order Total :{value} </h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₹  '}
        />
      </p>
    </div>
  );
}

export default Order;
