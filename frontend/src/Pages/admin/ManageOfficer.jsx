import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ManageOfficer.css";

function ManageOfficer() {
  const navigate = useNavigate();
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    loadOfficers();
  }, []);

const loadOfficers = async () => {
  try {

    const response = await fetch(
      "http://localhost:8084/E-Governance/officer",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const data = await response.json();
    setOfficers(data);

  } catch(error) {
    console.log(error);
  }
};

  const deleteOfficer = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this officer?"
    );

    if (!confirmDelete) return;

    await fetch(
      `http://localhost:8080/E-Governance/deleteOfficer/${id}`,
      {
        method: "DELETE",
      }
    );

    loadOfficers();
  };

  return (
    <div className="manage-officer-container">

      <div className="header">
        <h2>Manage Officers</h2>

        <button className="add-btn" onClick={() => navigate("/add-officer")}>
  Add Officer
</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

<tbody>
  {!Array.isArray(officers) || officers.length === 0 ? (
    <tr>
      <td colSpan="8">No officers found.</td>
    </tr>
  ) : (
    officers.map((officer) => (
      <tr key={officer.id}>
        <td>{officer.id}</td>
        <td>{officer.name}</td>
        <td>{officer.email}</td>
        <td>{officer.mobile}</td>
        <td>{officer.department}</td>
        <td>{officer.designation}</td>
        <td>{officer.status}</td>
        <td>
          <button className="view-btn">View</button>
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit-officer/${officer.id}`)}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteOfficer(officer.id)}
          >
            Delete
          </button>
        </td>
        
      </tr>
    ))
  )}
</tbody>

      </table>

    </div>
  );
}

export default ManageOfficer;