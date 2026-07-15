import { useEffect, useState } from "react";
import "./ManageCitizen.css";

function ManageCitizen() {

  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    loadCitizens();
  }, []);

const loadCitizens = async () => {
  try {
    const response = await fetch(
      "http://localhost:8084/E-Governance/citizens",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const data = await response.json();

    console.log("Citizens:", data);
    console.log("Is Array:", Array.isArray(data));

    setCitizens(data);

  } catch (error) {
    console.log(error);
  }
};

  const deleteCitizen = async (id) => {

    if (!window.confirm("Are you sure?")) {
      return;
    }

    await fetch(
      `http://localhost:8080/E-Governance/deleteCitizen/${id}`,
      {
        method: "DELETE",
      }
    );

    loadCitizens();
  };

  return (
    <div className="manage-citizen-container">

      <h2>Manage Citizens</h2>

      <input
        type="text"
        placeholder="Search Citizen..."
        className="search-box"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(citizens) &&
  citizens.map((citizen) => (
            <tr key={citizen.id}>
              <td>{citizen.id}</td>
              <td>{citizen.name}</td>
              <td>{citizen.email}</td>
              <td>{citizen.mobile}</td>
              <td>{citizen.address}</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteCitizen(citizen.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ManageCitizen;