import "./UpdateScheme.css";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function UpdateScheme() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [scheme, setScheme] = useState({
        schemeName: "",
        category: "",
        description: "",
        eligibility: "",
        benefitAmount: "",
        lastDate: "",
        status: ""
    });

    useEffect(() => {

        fetch(
            `http://localhost:8084/E-Governance/scheme/${id}`,
            {
                headers: {
                    "Authorization":
                    `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        .then(response => response.json())
        .then(data => setScheme(data));

    }, [id]);

    const handleChange = (e) => {

        setScheme({
            ...scheme,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(
            `http://localhost:8084/E-Governance/update-scheme/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                    `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(scheme)
            }
        );

        if(response.ok){

            alert("Scheme Updated Successfully");
            navigate("/view-schemes");

        }else{

            alert("Update Failed");

        }
    };

    return (

        <div className="scheme-container">

            <div className="scheme-card">

                <h2>Update Scheme</h2>

                <form onSubmit={handleSubmit}>

                   <label>Scheme Name</label>
                        <input
                            type="text"
                            name="schemeName"
                            value={scheme.schemeName}
                            onChange={handleChange}
                        />

                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={scheme.category}
                            onChange={handleChange}
                        />

                    <label>Description</label>
                        <textarea
                            name="description"
                            value={scheme.description}
                            onChange={handleChange}
                        />

                        <label>Eligibility</label>
                        <textarea
                            name="eligibility"
                            value={scheme.eligibility}
                            onChange={handleChange}
                        />

                        <label>Benefit Amount</label>
                        <input
                            type="number"
                            name="benefitAmount"
                            value={scheme.benefitAmount}
                            onChange={handleChange}
                        />

                        <label>Last Date</label>
                        <input
                            type="date"
                            name="lastDate"
                            value={scheme.lastDate?.split("T")[0]}
                            onChange={handleChange}
                        />

                        <label>Status</label>
                        <select
                            name="status"
                            value={scheme.status}
                            onChange={handleChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    <button type="submit">
                        Update Scheme
                    </button>

                </form>

            </div>

        </div>
    );
}

export default UpdateScheme;