import { Route, Routes } from "react-router-dom";
import AddPatients from "./components/AddPatients";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AllPatients from "./components/AllPatients";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPatients />} />
        <Route path="/all" element={<AllPatients />} />
        <Route path="/edit:id" element={<EditPatient />} />
        <Route path="/view" element={<ViewPatient />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
