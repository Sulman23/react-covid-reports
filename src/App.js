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
      {/* <Home /> */}
      {/* <AddPatients /> */}
      {/* <AllPatients /> */}
      {/* <EditPatient /> */}
      <ViewPatient />
      <Footer />
    </div>
  );
}

export default App;
