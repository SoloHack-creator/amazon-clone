import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [succeeded, setsucceeded] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        //  ! this url is created by application
        method: 'post',
        url: `payments/create?total=${getBasketTotal(basket) * 100}&email=${
          user?.email
        }`,
      })

      setClientSecret(response.data.clientSecret)
      console.log('Payment -> response', response)
    }
    getClientSecret()
  }, [basket])

  const handleSubmit = async (event) => {
    //all stripe functionality
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log('Payment -> payload', payload)
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
        setsucceeded(true)
        setError(null)
        setProcessing(false)
        history.replace('/orders')
        dispatch({
          type: 'EMPTY_BASKET',
        })
      })
  }
  const handleChange = (event) => {
    //Listen for cardelement changes
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          checkout (<Link to='/checkout'>{basket?.length}items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>
              <small>The JRE Experience </small>
            </p>

            <p>47 Dapplegray Rd</p>
            <p>Bell Canyon</p>
            <p>CA 91307 </p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Item And Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement
                classname='payment__cardelement'
                onChange={handleChange}
              />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹ '}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : 'PAY NOW'}</span>
                </button>
              </div>
            </form>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
