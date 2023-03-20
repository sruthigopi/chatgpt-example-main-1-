import React from "react";
// import './chat.css'
/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    // console.log("graph data",props.graphData)
    return (
        
        <div id="profile-div"className="prodatall">
            {/* <p className="prodata"><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p className="prodata"><strong>Last Name: </strong> {props.graphData.surname}</p> */}
            {/* <p className="prodata"><strong>Email: </strong> {props.graphData.userPrincipalName}</p> */}
            <p className="prodata"><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};