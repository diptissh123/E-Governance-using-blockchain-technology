import { useEffect, useState } from "react";
import "./MyApplication.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [schemeApplications, setSchemeApplications] = useState([]);
const [certificateApplications, setCertificateApplications] = useState([]);
const userId = localStorage.getItem("userId");

const loadCertificates = async () => {
  const userId = localStorage.getItem("userId");

  try {
    const response = await fetch(
      `http://localhost:8084/E-Governance/my-certificates/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();
    setCertificateApplications(data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:8084/E-Governance/my-applications/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.log(error));

        loadCertificates();   
  }, []);

  return (
    <div className="applications-container">
      <div className="applications-card">

        <h2>My Scheme Applications</h2>
              
        {applications.length === 0 ? (
          <p className="no-data">No applications found.</p>
        ) : (
           
          <table className="applications-table">
          
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Scheme ID</th>
                <th>Status</th>
                <th>Application Date</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.schemeId}</td>
                  <td>
                    <span
                      className={`status ${app.status?.toLowerCase()}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td>{app.applicationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}



<div className="certificate-section">
  <h2>My Certificate Applications</h2>

  {certificateApplications.length === 0 ? (
    <p className="no-data">No certificate applications found.</p>
  ) : (
    <table className="applications-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Certificate Type</th>
          <th>Application Date</th>
          <th>Status</th>
          <th>Download</th>
        </tr>
      </thead>

      <tbody>
        {certificateApplications.map((app) => (
          <tr key={app.id}>
            <td>{app.id}</td>
            <td>{app.certificateType}</td>
            <td>{app.applicationDate}</td>
            <td>
              <span className={`status ${app.status?.toLowerCase()}`}>
                {app.status}
              </span>
            </td>

            <td>
              {app.status === "Approved" ? (
                <button className="download-btn">
                  Download
                </button>
              ) : (
                "-"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
      </div>
    </div>
  );
}

export default MyApplications;