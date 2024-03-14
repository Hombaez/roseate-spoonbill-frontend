import "./Profile.css";
import React from "react";

function Profile() {
  return (
    <div className="Profile">
      {/* current working area */}
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
          <div className="button">button</div>
        </div>
      </div>
      {/* current working area */}
      <div className="settings">
        <div className="title">
          <h4>settings</h4>
        </div>
      </div>
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
