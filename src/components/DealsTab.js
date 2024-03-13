import "./DealsTab.css";

import React from "react";

import GreenButton from "./UI/buttons/GreenButton";

function DealsTab() {
  return (
    <div className="DealsTab">
      <div className="DealsTab_Container">
        <div className="deals_details">
          <div className="new_deals">
            <h2>New Deals</h2>
            <p>content</p>
          </div>
          <div className="expired_deals">
            <h2>Expired Deals</h2>
            <p>content</p>
          </div>
          <div className="closed_deals">
            <h2>Closed Deals</h2>
            <p>content</p>
          </div>
        </div>
        <div className="important_info">
          <h4>2 New Docs</h4>
          <h4>5 New Messages</h4>
          <h4>1 Upcoming Dates</h4>
        </div>
        {/* current work area */}
        <div className="active_deals">
          <h1>Active deals</h1>
          <p>hi</p>
        </div>
        {/* current work area */}
      </div>
    </div>
  );
}

export default DealsTab;
