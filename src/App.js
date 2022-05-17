import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddPatients from "./components/AddPatients";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AllPatients from "./components/AllPatients";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";
import Print from "./components/Print";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPatients />} />
        <Route path="/all" element={<AllPatients />} />
        <Route path="/edit/:id" element={<EditPatient />} />
        <Route path="/view/:id" element={<ViewPatient />} />
        <Route path="/print/:id" element={<Print />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
