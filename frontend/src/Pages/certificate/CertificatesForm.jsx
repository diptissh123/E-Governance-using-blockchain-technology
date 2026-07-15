import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CertificatesForm.css";
function CertificatesForm(){

    const [files, setFiles] = useState({
  document1: null,
  document2: null
});
    const [formData, setFormData] = useState({
      
  fullName: "",
  fatherName: "",
  motherName: "",
  dob: "",
  aadhaar: "",
  mobile: "",
  email: "",
  address: "",
  occupation: "",
  annualIncome: "",
  caste: "",
  subCaste: "",
  religion: "",
  birthPlace: "",
  yearsOfResidence: "",
  childName: "",
  gender: "",
  hospitalName: ""
});

    const handleFileChange = (e) => {
  setFiles({
    ...files,
    [e.target.name]: e.target.files[0]
  });
};
    const { type } = useParams();

    const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

const formDataToSend = new FormData();

Object.keys(formData).forEach((key) => {
  formDataToSend.append(key, formData[key]);
});

formDataToSend.append("userId", localStorage.getItem("userId"));
formDataToSend.append("certificateType", type);

formDataToSend.append("document1", files.document1);
formDataToSend.append("document2", files.document2);

  try {
const response = await fetch(
  "http://localhost:8084/E-Governance/apply-certificate",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: formDataToSend
  }
);

    if (response.ok) {
      alert("Certificate Application Submitted");
    } else {
      alert("Failed");
    }
  } catch (error) {
    console.log(error);
  }
};

    return(

  <div className="certificate-container">
    <div className="certificate-card">

      <h2>{type} Certificate Application</h2>

      <form className="certificate-form"  onSubmit={handleSubmit}>
            <input type="text" name="fullName"  value={formData.fullName}
  onChange={handleChange} placeholder="Full Name" />

            <input type="text" name="fatherName"  value={formData.fatherName}
  onChange={handleChange} placeholder="Father Name" />

            <input type="text" name="motherName" value={formData.motherName}
  onChange={handleChange} placeholder="Mother Name" />

            <input type="date" value={formData.dob}
  onChange={handleChange} name="dob" />

            <input type="text" name="aadhaar" value={formData.aadhaar}
  onChange={handleChange} placeholder="Aadhaar Number" />

            <input type="text" name="mobile" value={formData.mobile}
  onChange={handleChange}  placeholder="Mobile Number" />

            <input type="email" name="email" value={formData.email}
  onChange={handleChange} placeholder="Email" />

            <textarea name="address" value={formData.address}
  onChange={handleChange} placeholder="Address" />

            {type === "INCOME" && (
                <>
                    <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
  onChange={handleChange}
                    placeholder="Occupation"
                    />

                    <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
  onChange={handleChange}
                    placeholder="Annual Income"
                    />
                    <label>Ration Card</label>
                    <input type="file"   name="document1" onChange={handleFileChange}/>
                    <label>Talathi Income Certificate</label>
                    <input type="file"   name="document2" onChange={handleFileChange} />
                </>
                )}

                {type === "CASTE" && (
                        <>
                            <input
                            type="text"
                            name="caste"
                            value={formData.caste}
  onChange={handleChange}
                            placeholder="Caste"
                            />

                            <input
                            type="text"
                            name="subCaste"
                            value={formData.subCaste}
  onChange={handleChange}
                            placeholder="Sub Caste"
                            />

                            <input
                            type="text"
                            name="religion"
                            value={formData.religion}
  onChange={handleChange}
                            placeholder="Religion"
                            />
                            <label>Ration card</label>
                            <input type="file"   name="document1"
  onChange={handleFileChange} />
                            <label>Parents Adhar Card</label>
                            <input type="file"   name="document2"
  onChange={handleFileChange} />
                        </>
                )}

                {type === "DOMICILE" && (
                    <>
                        <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
  onChange={handleChange}
                        placeholder="Place of Birth"
                        />

                        <input
                        type="number"
                        name="yearsOfResidence"
                        value={formData.yearsOfResidence}
  onChange={handleChange}
                        placeholder="Years of Residence"
                        />

                        <textarea
                        value={formData.address}
  onChange={handleChange}
                        placeholder="Permanent Address"
                        />
                        <label>Residence Certificate</label>
                        <input type="file"   name="document1"
  onChange={handleFileChange} />
                    </>
                    )}


                    {type === "BIRTH" && (
                    <>
                        <input
                        type="text"
                        name="childName"
                        value={formData.childName}
  onChange={handleChange}
                        placeholder="Child Name"
                        />

                        <select name="gender" value={formData.gender}
  onChange={handleChange}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </select>

                        <input
                        type="text"
                        name="hospitalName"
                        value={formData.hospitalName}
  onChange={handleChange}
                        placeholder="Hospital Name"
                        />

                        <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
  onChange={handleChange}
                        placeholder="Place of Birth"
                        />
                        <label>Hospital Certificate</label>
                        <input type="file"   name="document1"
  onChange={handleFileChange}/>
                    </>
                    )}
                      <button type="submit" className="submit-btn">
                            Submit Application
                        </button>
      </form>

    </div>
  </div>
    );
}
export default CertificatesForm;