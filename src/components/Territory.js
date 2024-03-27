import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Territory.css";

const position = [42.36, -71.05]; // Latitude and Longitude of the map's center

function Territory() {
  return (
    <div className="Territory">
      {/* ------------------------------------------------------------*/}

      <div className="map">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "500px", width: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      {/* ------------------------------------------------------------*/}

      <div className="zip_codes">
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
