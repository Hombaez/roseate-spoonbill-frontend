import "./Profile.css";
import React from "react";

function Profile() {
  return (
    <div className="Profile">
      {/* current working area */}
      <div className="accountdetails">accountdetails</div>
      {/* current working area */}
      <div className="settings">settings</div>
      <div className="statements">statements</div>
      <div className="payment">payment</div>
      <div className="support">support</div>
      <div className="billing">billing</div>
    </div>
  );
}

export default Profile;
