import { useEffect, useState } from "react";
import "./SchemeApplications.css";

function SchemeApplications() {
  const [applications, setApplications] = useState([]);

 const loadApplications = async () => {
  try {
    const response = await fetch(
      "http://localhost:8084/E-Governance/applications",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    console.log(data);

    setApplications(Array.isArray(data) ? data : []);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  loadApplications();
}, []);

  const approveApplication = async (id) => {
  await fetch(
    `http://localhost:8084/E-Governance/approve/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  loadApplications();
};

const rejectApplication = async (id) => {
  await fetch(
    `http://localhost:8084/E-Governance/reject/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  loadApplications();
};
  return (
     <div className="officer-applications">

      <h2>Scheme Applications</h2>

      <input
        type="text"
        placeholder="Search Citizen..."
        className="search-box"
      />
        {applications.length === 0 ? (
          <p className="no-data">No applications found.</p>
        ) : (
          <table >
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Scheme ID</th>
                <th>User ID</th>
                <th>Application Date</th>
                <th>Status</th>
                
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.schemeId}</td>
                  <td>{app.userId}</td>
                   <td>{app.applicationDate}</td>
                         <td>
          {app.status === "Pending" && (
            <>
              <button
                className="approve-btn"
                onClick={() => approveApplication(app.id)}
              >
                Approve
              </button>

              <button
                className="reject-btn"
                onClick={() => rejectApplication(app.id)}
              >
                Reject
              </button>
            </>
          )}
        </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
  
  );
}


export default SchemeApplications;