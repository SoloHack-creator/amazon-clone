import './Subtotal.css';

import { Link, useHistory } from 'react-router-dom';

import CurrencyFormat from 'react-currency-format';
import React from 'react';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items ):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain some gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button
        onClick={(e) => history.push('/payment')}
        className="subtotal__button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
