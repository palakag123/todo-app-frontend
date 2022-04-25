/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import React from "react";
import "./UserDetails.css";
import Clock from "react-live-clock";
import userImage from "../../resources/userImage.jpeg";

function UserDetails() {
  return (
    <div className="details-container">
      <div className="details-inner-container">
        <img id="user-img" src={userImage} alt="user" data-testid="userImg" />
        <h2 id="greeting" data-testid="greeting">
          HI, USER
        </h2>
        <br />
        <h1 id="date-time" data-testid="time">
          <Clock format="h:mm a" ticking timezone="Asia/Calcutta" />
        </h1>
        <h1 id="date-time" data-testid="date">
          <Clock ticking format="DD MMMM, YYYY" timezone="Asia/Calcutta" />
        </h1>
      </div>
    </div>
  );
}

export default UserDetails;
