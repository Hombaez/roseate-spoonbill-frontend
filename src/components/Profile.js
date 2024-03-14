import "./Profile.css";
import React from "react";

import SecondaryButton from "../components/UI/buttons/SecondaryButton";

function Profile() {
  return (
    <div className="Profile">
      <div className="accountdetails">
        <div className="title">
          <h4>Your Profile</h4>
        </div>
        <div className="accountdetails_container">
          <div className="profile_details">
            <div className="info">
              <div>photo</div>
              <div>
                <p>name</p>
                <p>company</p>
                <p>Licence</p>
                <p>phone</p>
              </div>
            </div>
            <div className="bio">type yourbio here</div>
          </div>
          <div className="profile_button">
            {" "}
            <SecondaryButton className="button">edit profile</SecondaryButton>
          </div>
        </div>
      </div>
      {/* current working area */}
      <div className="settings">
        <div className="title">
          <h4>settings</h4>
        </div>
        <div className="button_container">
          <SecondaryButton className="button">Notifications</SecondaryButton>
          <SecondaryButton className="button">Connect Calendar</SecondaryButton>
          <SecondaryButton className="button">
            Connect Social Media
          </SecondaryButton>
          <SecondaryButton className="button">
            License Information
          </SecondaryButton>
          <SecondaryButton className="button">Change Password</SecondaryButton>
          <SecondaryButton className="button">Privacy</SecondaryButton>
        </div>
      </div>
      {/* current working area */}
      <div className="statements">
        <div className="title">
          <h4>statements</h4>
        </div>
      </div>
      <div className="payment">
        <div className="title">
          <h4>payments</h4>
        </div>
      </div>
      <div className="support">
        <div className="title">
          <h4>support</h4>
        </div>
      </div>
      <div className="billing">
        <div className="title">
          <h4>billing</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
