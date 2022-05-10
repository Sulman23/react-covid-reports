import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPatient = () => {
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
    setPatients(result.data);
  };

  // Getting Patients from DB by using useEffect hook
  useEffect(() => {
    getPatient();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <h2 className="text-center">ViewPatient</h2>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <img src="" alt="" />
              </div>
              <div className="col-md-6">
                <h3>SA Lab</h3>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" colSpan="4" className="text-center">
                    Patient Test Report <span>ID {id}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{patients.id}</th>
                  <td>{patients.name}</td>
                  <td>{patients.email}</td>
                  <td>{patients.phone}</td>
                  <td>
                    <button className="btn btn-primary">Print Report</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
