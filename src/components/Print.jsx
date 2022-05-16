import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import PrintFooter from "./PrintFooter";

const Print = () => {
  // Defining State
  const [patients, setPatients] = useState({});
  // Getting Patient by using ID
  const { id } = useParams();

  // Defining Single getPatient by ID function
  const getPatient = async () => {
    const result = await axios.get(
      `http://localhost:3001/patients/${id}`,
      patients
    );
    // for Heroku
    // const result = await axios.get(`/patients/${id}`, patients);
    console.log(result.data);

    setPatients(result.data);
  };
  // Getting Patients from DB by using useEffect hook
  useEffect(() => {
    getPatient();
  }, []);

  const componentRef = useRef();

  // for Printing Report
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="container d-flex justify-content-end pt-3">
            <button onClick={handlePrint} className="btn btn-secondary">
              Print Report
            </button>
          </div>
        </div>
      </div>

      <div className="container p-5" ref={componentRef}>
        <h3 className="text-center">Patient Test Report</h3>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={logo} alt="logo" className="print-logo" />
            <h6>SA Lab Faisalabad, Pakistan</h6>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-borderless table-sm caption-top">
              <caption className="text-center">
                <strong>Patient Info</strong>
              </caption>
              <thead></thead>
              <tbody>
                <tr>
                  <th>Patient ID:</th>
                  <td>{patients.id}</td>
                  <th>Name:</th>
                  <td>{patients.name}</td>
                  <th>Email:</th>
                  <td>{patients.email}</td>
                  <th>Phone Number:</th>
                  <td>{patients.phone}</td>
                </tr>
                <tr>
                  <th>Age:</th>
                  <td>{patients.age}</td>
                  <th>Referd By:</th>
                  <td>{patients.refer}</td>
                  <th>Address:</th>
                  <td>{patients.address}</td>
                  <th>Gender:</th>
                  <td>{patients.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <table className="table table-bordered border-secondary text-center caption-top">
              <caption className="text-center">
                <strong>Test Result</strong>
              </caption>

              <thead>
                <tr>
                  <th scope="col">Test Name</th>
                  <th scope="col">Result</th>
                  <th scope="col">Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Covid 19</td>
                  <th>{patients.result}</th>
                  <td>Negtive/Postive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PrintFooter />
      </div>
    </>
  );
};

export default Print;
