import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from "./firebase"



function Login() {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")

            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth => {
                history.push("/")
            }))
            .catch((e => alert(e.message)))
    }




    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                    className="login__logo">
                </img>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={(event) => setPassword(event.target.value)} type="password"></input>

                    <button onClick={login} className="login__signInButton" type="submit"> Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

