import React from "react";

import "./ConnectionsTab.css";

function ConnectionsTab() {
  return (
    <div className="ConnectionsTab">
      <div className="ConnectionsTab_Container">
        <div className="connect_container">
          <div className="connections_title">
            <h3>connections</h3>
          </div>
          <div className="connection_info">
            {/* crate dummy data, use map for dummy data, add scroll feature */}
            <div className="date">
              <h4>date</h4>
              <h4>6-21-23</h4>
            </div>
            <div className="name">
              <h4>name</h4>
              <h4>John Smith</h4>
            </div>
            <div className="message">
              <h4>message</h4>
              <h4>How can I get pre-approved?</h4>
            </div>
            <div className="status">
              <h4>status</h4>
              <h4>pre-approval</h4>
            </div>
          </div>
          {/* Current working area */}
          <div className="send_message">
            <div className="send_message_title">
              <h3>message with jake johns</h3>
            </div>
            <div className="messaging_box">
              <h3>this is the messaging box</h3>
            </div>
            <div className="text_area">
              <h3>{">"}Hi Jake! Happy to help</h3>
              <p>send</p>
            </div>
          </div>
          {/* Current working area */}
        </div>
        <div className="automessage_container">auto message</div>
      </div>
    </div>
  );
}

export default ConnectionsTab;
