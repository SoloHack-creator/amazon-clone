import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"
import Final from "./Final";

function App() {

  const [{ user }, dispatch] = useStateValue();

  //onAuthStateChanged returns unsubscribe
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        //logged IN
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        //Logged Out
        dispatch({
          type: 'SET_USER',
          user: null,

        });
      }
    })

    return () => {
      //Any cleanUp
      unsubscribe()
    }

  }, []);

  console.log("user----is ", user);

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/final">
            <Final />
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
