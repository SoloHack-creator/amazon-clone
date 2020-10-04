import './App.css';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { auth, db } from './firebase';
import { useStateValue } from './StateProvider';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51HWz3SENAdZts6RnvgAYsP3IHlDk1WugTxQOvpdPNyKsxYL07q8ndWsEUJO2Dn0Wy2zXgGKG2O5Et9C7BWCoEDbR008BwgelSo'
);
function App() {
  const [{ user }, dispatch] = useStateValue();

  //onAuthStateChanged returns unsubscribe
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged IN
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //Logged Out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      //Any cleanUp
      unsubscribe();
    };
  }, []);

  console.log('user----is ', user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
