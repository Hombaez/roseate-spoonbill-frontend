import React from "react";

import "./Territory.css";

function Territory() {
  return (
    <div className="Territory">
      <div className="map">map</div>
      <div className="zip_codes">
        <div className="your_zip">
          <div className="your_zip_title">
            <h3>Your Territory</h3>
          </div>
          <div className="all_zip_data">
            <div className="zip_data">
              <h2>zip</h2>
              <h2>02346</h2>
              <h2>02134</h2>
            </div>
            <div className="impressions">
              <h2>impression & queue</h2>
              <h2>17%</h2>
              <h2>21%</h2>
            </div>
          </div>
        </div>
        {/* current work area */}
        <div className="buy_zip">
          <div className="buy_zip_title">
            <h3>Add Territory</h3>
          </div>

          <div className="search_bar">
            <h3>this is a search bar</h3>
          </div>
          <div className="available_zips">
            <div className="all_zip_data">
              <div className="zip_data">
                <h2>zip</h2>
                <h2>02346</h2>
                <h2>02134</h2>
              </div>
              <div className="availability_buttons">
                <h3>availability</h3>
                <h3>this is a button</h3>
                <h3>this is a button</h3>
              </div>
              <div className="impressions">
                <h2>impression & queue</h2>
                <h2>17%</h2>
                <h2>21%</h2>
              </div>
            </div>
          </div>
        </div>
        {/* current work area */}
      </div>
    </div>
  );
}

export default Territory;
