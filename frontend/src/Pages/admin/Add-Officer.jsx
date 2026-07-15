import { useState } from "react";
import "./Add-Officer.css";
import { useNavigate } from "react-router-dom";

function AddOfficer() {

  const navigate = useNavigate();

  const [officer, setOfficer] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    department: "",
    designation: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setOfficer({
      ...officer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8084/E-Governance/addOfficer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":
              `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(officer)
        }
      );

      if (response.ok) {
        alert("Officer Added Successfully");
        navigate("/manageOfficer");
      } else {
        alert("Failed to Add Officer");
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="add-officer-container">

      <div className="add-officer-card">

        <h2>Add Officer</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={officer.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={officer.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={officer.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={officer.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={officer.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={officer.designation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={officer.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Add Officer
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddOfficer;