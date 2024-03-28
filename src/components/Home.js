import "./Home.css";

import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "270050881815-hqtm2mrapfmlgob4djfj4r7qjvh3lsd2.apps.googleusercontent.com";
const API_KEY = "AIzaSyDVkH8LABTfFL_Vij73xpb1lDSjMwQCp8M";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function Home() {
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [gisLoaded, setGisLoaded] = useState(false);
  const [events, setEvents] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.onload = () => setGapiLoaded(true);
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);

    const gisScript = document.createElement("script");
    gisScript.onload = () => setGisLoaded(true);
    gisScript.async = true;
    gisScript.defer = true;
    gisScript.src = "https://accounts.google.com/gsi/client";
    document.body.appendChild(gisScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(gisScript);
    };
  }, []);

  useEffect(() => {
    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
    };

    if (gapiLoaded) {
      gapi.load("client", initializeGapiClient);
    }
  }, [gapiLoaded]);

  const handleAuthClick = () => {
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: async (resp) => {
        if (resp.error !== undefined) {
          throw resp;
        }
        setIsAuthorized(true);
        await listUpcomingEvents();
      },
    });

    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token, () => {
        gapi.client.setToken("");
        setEvents([]);
        setIsAuthorized(false);
      });
    }
  };

  const listUpcomingEvents = async () => {
    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      const response = await gapi.client.calendar.events.list(request);
      setEvents(response.result.items);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Home">
      <div className="Home_Container">
        <div className="overview">
          <div className="header">
            <h2>Overview</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="upcoming_events">
          <div className="header">
            <h2>Upcoming Events</h2>
          </div>
          <div>
            <div>
              <p>Google Calendar API Quickstart</p>
              {isAuthorized ? (
                <button onClick={handleSignoutClick}>Sign Out</button>
              ) : (
                <button onClick={handleAuthClick}>Authorize</button>
              )}
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {events.length > 0
                  ? `Events:\n${events
                      .map(
                        (event) =>
                          `${event.summary} (${
                            event.start.dateTime || event.start.date
                          })`
                      )
                      .join("\n")}`
                  : "No events found."}
              </pre>
            </div>
          </div>
        </div>
        <div className="new_connections">
          <div className="header">
            <h2>New Connections</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="performance">
          <div className="header">
            <h2>Performance</h2>
          </div>
          <div>
            <p>content</p>
          </div>
        </div>
        <div className="control_center">
          <div className="header">
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
