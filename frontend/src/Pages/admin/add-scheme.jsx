import "./Add-scheme.css";
import { useState } from "react";

function AddScheme() {

  const [scheme, setScheme] = useState({
    schemeName: "",
    category: "",
    description: "",
    eligibility: "",
    benefitAmount: "",
    lastDate: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setScheme({
      ...scheme,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:8084/E-Governance/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(scheme)
      }
    );

    if (response.ok) {

      alert("Scheme Added Successfully");

      setScheme({
        schemeName: "",
        category: "",
        description: "",
        eligibility: "",
        benefitAmount: "",
        lastDate: "",
        status: "Active"
      });

    } else {

      const errorText = await response.text();
      alert("Error: " + errorText);

    }

  } catch (error) {

    console.error(error);
    alert("Failed to connect to server");

  }
};

  return (
  <div className="scheme-container">
    <div className="scheme-card">

      <h2>Add Government Scheme</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Scheme Name</label>
          <input
            type="text"
            name="schemeName"
            value={scheme.schemeName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={scheme.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Employment">Employment</option>
            <option value="Women">Women Empowerment</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={scheme.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Eligibility</label>
          <textarea
            name="eligibility"
            value={scheme.eligibility}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Benefit Amount</label>
          <input
            type="number"
            name="benefitAmount"
            value={scheme.benefitAmount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Date</label>
          <input
            type="date"
            name="lastDate"
            value={scheme.lastDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Scheme
        </button>

      </form>
    </div>
  </div>
);
}

export default AddScheme;