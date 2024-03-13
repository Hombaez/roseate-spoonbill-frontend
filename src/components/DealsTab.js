import "./DealsTab.css";

import React from "react";

import GreenButton from "./UI/buttons/GreenButton";
import GreyButton from "./UI/buttons/GreyButton";

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
          <h2>Active deals</h2>
          <div className="active_deals_container">
            <div className="lead_details">
              <p className="last_active">active 2 hours ago</p>
              <div className="name_image">
                <p>image</p>
                <p>John Smith</p>
              </div>
              <div className="progress_bar">
                <p>progress bar</p>
                <hr />
              </div>
              <GreenButton>Chat (!)</GreenButton>
            </div>
            {/* SUB WOKRING -----------------*/}
            <div className="controls">
              <div className="controls_title">
                <h3>control</h3>
              </div>
              <form action="">
                <select name="process" id="process">
                  <option value="preapp">Pre Approved</option>
                  <option value="approval">Approval</option>
                </select>
              </form>
              <GreyButton>Upload Documents</GreyButton>
              <div className="download_docs">
                <GreyButton>Download Documents</GreyButton>
                <p>(!)</p>
              </div>
              <div className="calendar">
                <p>cal</p>
                <p>(!)</p>
              </div>
            </div>
            {/* SUB WOKRING -----------------*/}
            <div className="liked_props">liked</div>
            <div className="documents">documents</div>
          </div>
        </div>
        {/* current work area */}
      </div>
    </div>
  );
}

export default DealsTab;
