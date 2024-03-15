import "./DealsTab.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import GreenButton from "./UI/buttons/GreenButton";
import GreyButton from "./UI/buttons/GreyButton";

const dealInfoDummyData = [
  {
    name1: "John",
    name2: "Alice",
    expired: false,
    newDeal: true,
    closedDeal: false,
  },
  {
    name1: "Bob",
    name2: null,
    expired: true,
    newDeal: false,
    closedDeal: false,
  },
  {
    name1: "Michael",
    name2: "Sarah",
    expired: true,
    newDeal: false,
    closedDeal: false,
  },
  {
    name1: "David",
    name2: "Emily",
    expired: false,
    newDeal: false,
    closedDeal: true,
  },
];

const clientDummyData = [
  {
    name: "John Doe",
    photo: "photo",
    likedAddresses: [
      {
        address: "123 Main St",
      },
      {
        address: "456 Elm St",
      },
    ],
    documents: [
      {
        title: "Document 1",
      },
      {
        title: "Document 2",
      },
      {
        title: "Document 3",
      },
    ],
  },
  {
    name: "Jane Smith",
    photo: "photo",
    likedAddresses: [
      {
        address: "789 Oak St",
      },
      {
        address: "101 Pine St",
      },
    ],
    documents: [
      {
        title: "Document A",
      },
      {
        title: "Document B",
      },
    ],
  },
];

function DealsTab() {
  const navigate = useNavigate();

  const sendMessage = () => {
    // Navigate to ConnectionsTab.js
    navigate("/connections");
    console.log("going to send message");
  };

  return (
    <div className="DealsTab">
      <div className="DealsTab_Container">
        <div className="deal_info">
          <table className="new_deals">
            <thead>
              <tr>
                <th colSpan="2" id="new_deals_title">
                  New Deals
                </th>
              </tr>
            </thead>
            <tbody>
              {dealInfoDummyData.map(
                (deal, index) =>
                  deal["newDeal"] && (
                    <tr key={index}>
                      <td>
                        {deal.name1} {deal.name2 ? `& ${deal.name2}` : ""}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <table className="expired_deals">
            <thead>
              <tr>
                <th colSpan="2" id="expired_deals_title">
                  Expired Deals
                </th>
              </tr>
            </thead>
            <tbody>
              {dealInfoDummyData.map(
                (deal, index) =>
                  deal["expired"] && (
                    <tr key={index}>
                      <td>
                        {deal.name1} {deal.name2 ? `& ${deal.name2}` : ""}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <table className="closed_deals">
            <thead>
              <tr>
                <th colSpan="2" id="closed_deals_title">
                  Closed Deals
                </th>
              </tr>
            </thead>
            <tbody>
              {dealInfoDummyData.map(
                (deal, index) =>
                  deal["closedDeal"] && (
                    <tr key={index}>
                      <td>
                        {deal.name1} {deal.name2 ? `& ${deal.name2}` : ""}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
        <div className="right_box">
          <div className="notifications">
            <h4>2 New Deals</h4>
            <h4>5 New Messages</h4>
            <h4>1 Upcoming Dates</h4>
          </div>
          <div className="active_deals">
            <div id="active_deals_title">
              <h3>Active Deals</h3>
            </div>
            <table className="contact_table">
              <thead>
                <tr>
                  <th colSpan="2">Last Active: 2 hours ago</th>
                  <th className="category_title">Control</th>
                  <th className="category_title">Liked</th>
                  <th colSpan="3" className="category_title">
                    Documents
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientDummyData.map((deal, index) => (
                  <tr key={index}>
                    <td colSpan="2" style={{ verticalAlign: "top" }}>
                      <div className="client_id">
                        <p>{deal.photo}</p>
                        <p>{deal.name}</p>
                      </div>
                      <div className="progress_bar">
                        <p>Progress Bar</p>
                        <p>_______</p>
                      </div>
                      <div onClick={sendMessage} className="chat_button">
                        <GreenButton>Chat</GreenButton>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <div className="control_container">
                        <form action="">
                          <select
                            name="process"
                            id="process"
                            className="select_control"
                          >
                            <option value="preapp">Pre Approved</option>
                            <option value="approval">Approval</option>
                            <option value="denied">Denied</option>
                          </select>
                        </form>
                        <div className="load_documents">
                          <GreyButton id="grey_button">
                            Upload Documents
                          </GreyButton>
                          <GreyButton id="grey_button">
                            Download Documents
                          </GreyButton>
                        </div>
                        <p>Cal</p>
                      </div>
                    </td>
                    <td
                      className="liked_addresses cell_with_addresses"
                      style={{ verticalAlign: "top", display: "table-cell" }}
                    >
                      <div className="address_container">
                        {deal.likedAddresses.map((address, i) => (
                          <div key={i} className="address_details">
                            {address.address}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td
                      className="documents_container"
                      style={{ verticalAlign: "top", display: "table-cell" }}
                    >
                      {deal.documents.map((document, i) => (
                        <div key={i} className="document_info">
                          <p>{document.title}</p>
                          <p>see</p>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsTab;
