import React from "react";

import "./Territory.css";

function Territory() {
  return (
    <div className="Territory">
      <div className="map">map</div>
      <div className="zip_codes">
        {/* current work area */}
        <div className="your_zip">
          <div className="your_zip_title">Your Territory</div>
          <table>
            <tr>
              <th>Zip Code</th>
              <th>Impressions</th>
            </tr>
            <tr>
              <td>02116</td>
              <td>17%</td>
            </tr>
            <tr>
              <td>02134</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>02346</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>02111</td>
              <td>3%</td>
            </tr>
          </table>
        </div>
        {/* current work area */}
        <div className="buy_zip">
          <div className="buy_zip_title">
            <h3>Add Territory</h3>
          </div>

          <div className="search_bar">
            <h3>this is a search bar</h3>
          </div>
          <table>
            <tr>
              <th>Zip Code</th>
              <th>Availability</th>
              <th>Impressions</th>
            </tr>
            <tr>
              <td>02116</td>
              <td>Button</td>
              <td>17%</td>
            </tr>
            <tr>
              <td>02134</td>
              <td>Button</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>02346</td>
              <td>Button</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>02111</td>
              <td>Button</td>
              <td>3%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Territory;
