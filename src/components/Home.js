import React from "react";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home_Container">
        <div className="overview">
          <div className="overview_header">
            <h2>Overview</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="upcoming_events">
          <div className="events_header">
            <h2>Upcoming Events</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="new_connections">
          <div className="connections_header">
            <h2>New Connections</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="performance">
          <div className="performance_header">
            <h2>Performance</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="control_center">
          <div className="controls_header">
            <h2>Control Center</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
