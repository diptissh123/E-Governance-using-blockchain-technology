import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/public/Home";
import Login from "./Pages/public/Login";
import Register from "./Pages/public/Register";
import VerifyCertificate from "./Pages/public/VerifyCertificate";
import About from "./Pages/public/About";
import CitizenDashboard from "./Pages/citizen/CitizenDashboard";
import OfficerDashboard from "./Pages/officer/OfficerDashboard";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import ViewSchemes from "./Pages/citizen/ViewSchemes";
import AddScheme from "./Pages/admin/add-scheme";
import UpdateScheme from "./Pages/admin/update-scheme";
import ApplyScheme from "./Pages/citizen/ApplyScheme";
import Profile from "./Pages/public/Profile";
import ManageCitizen from "./Pages/admin/ManageCitizen";
import ManageOfficer from "./Pages/admin/ManageOfficer";
import AddOfficer from "./Pages/admin/Add-Officer";
import MyApplications from "./Pages/citizen/MyApplication";
import Feedback from "./Pages/citizen/feedback";
import Applications from "./Pages/admin/Applications";
import Reports from "./Pages/admin/Reports";
import CertificatesForm from "./Pages/certificate/CertificatesForm";
import SchemeApplications from "./Pages/officer/SchemeApplications";
import CertificateApplications from "./Pages/officer/CertificateApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Create these pages later */}
        <Route path="/schemes" element={<h1>View Schemes</h1>} />
        <Route path="/verify-certificate" element={<VerifyCertificate/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/officer-dashboard" element={<OfficerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/view-schemes"  element={<ViewSchemes/>}/>
        <Route path="/add-scheme" element={<AddScheme/>}/>
        <Route path="/update-scheme/:id" element={<UpdateScheme/>}/>
        <Route path="/apply-scheme/:id" element={<ApplyScheme/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/manageCitizen" element={<ManageCitizen/>}/>
        <Route path="/manageOfficer" element={<ManageOfficer/>}/>
        <Route path="/add-officer" element={<AddOfficer />}/>
        <Route path="/apply-scheme" element={<ApplyScheme/>}/>
        <Route path="/my-applications" element={<MyApplications/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/certificate/:type" element={<CertificatesForm />}/>
        <Route path="/scheme-applications" element={<SchemeApplications/>}/>
        <Route path="/certificate-applications" element={<CertificateApplications />}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;