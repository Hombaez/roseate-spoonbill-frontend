import "./DealsTab.css";

import AWS from "aws-sdk";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GreenButton from "./UI/buttons/GreenButton";
import GreyButton from "./UI/buttons/GreyButton";

// ---------------------------------------------------------------------
// ------------ DUMMY DATA ---------------------------------------------
// ---------------------------------------------------------------------
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
// ---------------------------------------------------------------------
// ------------ DUMMY DATA ---------------------------------------------
// ---------------------------------------------------------------------

function DealsTab() {
  const navigate = useNavigate();

  const BUCKET_NAME = process.env.REACT_APP_AWS_S3_BUCKET_NAME;
  const REGION_NAME = process.env.REACT_APP_REGION;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;

  //hold file data in state
  const [file, setFile] = useState(null);

  //function to send a message
  const sendMessage = () => {
    // Navigate to ConnectionsTab.js
    navigate("/connections");
    console.log("going to send message");
    //add code that opens up the specific person that was pressed on
  };

  // ---------------------------------------------------------------------
  // ------------ UPLOAD FUNCTIONS ---------------------------------------------
  // ---------------------------------------------------------------------

  // Function to upload file to s3
  const uploadFile = async () => {
    //this checks if there was a file that was uploaded, if not and the buttonw as pressed it sends an alert saying no doc uploaded
    if (!file) {
      alert("No document has been selected");
      return; // Early return to stop further execution
    }

    // S3 Bucket Name
    const S3_BUCKET = BUCKET_NAME;
    // S3 Region
    const REGION = REGION_NAME;

    // S3 Credentials
    AWS.config.update({
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3
    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      // File successfully uploaded
      alert("File uploaded successfully.");
    });
  };

  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file

    const file = e.target.files[0];
    // Changing file state

    setFile(file);
  };

  // ---------------------------------------------------------------------
  // ----------------- VIEW DOCUMENT -------------------------------------
  // ---------------------------------------------------------------------

  const handleDocumentClick = (documentKey) => {
    // Construct the URL for the document
    const encodedDocumentKey = encodeURIComponent(documentKey);
    const url = `https://hombaez-dev.s3.amazonaws.com/${encodedDocumentKey}`;
    window.open(url, "_blank");
  };

  // ---------------------------------------------------------------------
  // ------------ DOWNLOAD FUNCTIONS -------------------------------------
  // ---------------------------------------------------------------------

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // AWS SDK Configuration
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_REGION,
    });

    const s3 = new AWS.S3();

    const listDocuments = async () => {
      const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
      };

      try {
        const data = await s3.listObjectsV2(params).promise();
        setDocuments(data.Contents); // Contains info about each object
      } catch (error) {
        console.error("Error listing S3 documents:", error);
      }
    };

    listDocuments();
  }, []);

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
                          <input type="file" onChange={handleFileChange} />
                          <button onClick={uploadFile}>Upload</button>
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
                      {documents.map((doc, index) => (
                        <p
                          key={index}
                          onClick={() => handleDocumentClick(doc.Key)}
                          style={{ cursor: "pointer" }}
                        >
                          {doc.Key.split("/").pop()}{" "}
                        </p>
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
