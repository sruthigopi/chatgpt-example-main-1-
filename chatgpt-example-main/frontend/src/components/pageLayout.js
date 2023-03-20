import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./signinButton";
import { SignOutButton } from "./signOutButton";
import { useMsal } from "@azure/msal-react";
import '../App.css';
// 
import Button from "react-bootstrap/Button";
import { useState , useEffect} from "react";
import { loginRequest } from "../config.ts";
import { ProfileData } from "./profileData";
import { callMsGraph } from "../graph";
export  let AccessToken;

// 
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
// 
    function ProfileContent() {
        const { instance, accounts } = useMsal();
        const [graphData, setGraphData] = useState(null);
    
        const name = accounts[0] && accounts[0].name;
        
        function RequestProfileData() {
    
            
            const request = {
                ...loginRequest,
                account: accounts[0]
            };
    
            // Silently acquires an access token which is then attached to a request for Microsoft Graph data
            instance.acquireTokenSilent(request).then((response) => {
    
                AccessToken = response.accessToken
                console.log("AccessToken to export:",AccessToken);
                
                callMsGraph(response.accessToken).then(response => setGraphData(response));
                console.log(graphData)
            }).catch((e) => {
                instance.acquireTokenPopup(request).then((response) => {
                    callMsGraph(response.accessToken).then(response => setGraphData(response));
                });
            });
        }
    
        useEffect(() => {
            RequestProfileData();
             }, []);

        return (
            <>
               

                <h5 className="card-title">Welcome {name}</h5>
                {/* {graphData ? 
                    <ProfileData graphData={graphData} />
                    :
                    <Button variant="secondary" className="btn" onClick={RequestProfileData}> Profile Information</Button>
                } */}
             
            </>
        );
    }
    // 
    return (
        <>
            <Navbar variant="dark" className="navbar">
                <a className="navbar-brand" href="/">LEAVE MANAGEMENT</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                {/* {isAuthenticated ?<h5 className="card-title">Welcome {name}</h5>:""} */}
                {isAuthenticated ?<ProfileContent/>:""}
            </Navbar>
            {/* <br />
            <br /> */}
            {props.children}
        </>
    );
};