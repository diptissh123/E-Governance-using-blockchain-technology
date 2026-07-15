import { useEffect, useState } from "react";
import "./Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
   

    fetch(`http://localhost:8084/E-Governance/applications`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="applications-container">
      <div className="applications-card">
        <h2>Citizens Applications</h2>

        {applications.length === 0 ? (
          <p className="no-data">No applications found.</p>
        ) : (
          <table className="applications-table">
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Scheme ID</th>
                <th>User ID</th>
                <th>Status</th>
                <th>Application Date</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.schemeId}</td>
                  <td>{app.userId}</td>
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
      </div>
    </div>
  );
}

export default Applications;