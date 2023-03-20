import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config.ts";
import Button from "react-bootstrap/Button";
import '../App.css';


/**
 * Renders a button which, when selected, will open a popup for login
 */

    

export const SignInButton = () => {


    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        console.log('signin button');
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }     
    }
    return (
        <Button variant="secondary" className="ml-auto butn" onClick={() => handleLogin("popup")}>Sign in</Button>
    );
}