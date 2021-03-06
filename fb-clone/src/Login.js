import React from 'react';
import "./Login.css";
import logo from './f_logo_RGB-Blue_1024.png';
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";

function Login() {

    const signIn = () => {
        // sign in
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src={logo} />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login
