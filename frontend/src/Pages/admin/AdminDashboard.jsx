import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();


      const [reports, setReports] = useState({});
  
  useEffect(() => {
    fetch("http://localhost:8084/E-Governance/reports", {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setReports(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>E-Governance</h2>

        <ul>
          <li onClick={() => navigate("/admin-dashboard")}>
            Dashboard
          </li>

          <li onClick={() => navigate("/add-scheme")}>
            Add Scheme
          </li>

          <li onClick={() => navigate("/view-schemes")}>
            View Schemes
          </li>

          <li onClick={() => navigate("/manageCitizen")}>
            Manage Citizens
          </li>

          <li  onClick={() => navigate("/manageOfficer")}>
            Manage Officers
          </li>

          <li onClick={() => navigate("/applications")}>
            Applications
          </li>

          <li onClick={() => navigate("/reports")}>
            Reports
          </li>

          <li onClick={() => navigate("/profile")}>
            Profile
          </li>

          <li onClick={() => {
            localStorage.clear();
            navigate("/");
          }}>
            Logout
          </li>
        </ul>
      </div>

<div className="main-content">

<div className="header">
  <h1>Admin Dashboard</h1>
  <p>Welcome Administrator</p>
</div>

  <div className="dashboard-cards">
    {/* cards */}

           <div className="card">
          <h3>Total Citizens</h3>
          <p>{reports.totalCitizens}</p>
        </div>

        <div className="card">
          <h3>Total Officers</h3>
          <p>{reports.totalOfficers}</p>
        </div>

        <div className="card">
          <h3>Total Schemes</h3>
          <p>{reports.totalSchemes}</p>
        </div>

        <div className="card">
          <h3>Total Applications</h3>
          <p>{reports.totalApplications}</p>
        </div>

        <div className="card">
          <h3>Approved Applications</h3>
          <p>{reports.approvdApplications}</p>
        </div>

        <div className="card">
          <h3>Pending Applications</h3>
          <p>{reports.pendingApprovals}</p>
        </div>

        <div className="card">
          <h3>Rejected Applications</h3>
          <p>{reports.rejectedApplication}</p>
        </div>
   

        <div className="card">
          <h3>Certificate Issued</h3>
          <p>{reports.certificatesIssued}</p>
        </div>
      </div>
  </div>

  <div className="quick-actions">
    <button onClick={() => navigate("/add-scheme")}>
      Add New Scheme
    </button>

    <button onClick={() => navigate("/view-schemes")}>
      View Schemes
    </button>

    <button onClick={() => navigate("/applications")}>
      View Applications
    </button>
  </div>

</div>

    
  
  );
}

export default AdminDashboard;