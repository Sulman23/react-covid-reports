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
    // const result = await axios.get(
    //   `http://localhost:3001/patients/${id}`,
    //   patients
    // for Heroku
    const result = await axios.get(`/patients/${id}`, patients);
    setPatients(result.data);
  };

  // Getting Patients from DB by using useEffect hook
  useEffect(() => {
    getPatient();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="text-center text-info my-4">ViewPatient</h2>

        <div className="row my-3">
          <div className="col-md-12">
            <table className="table caption-top text-center">
              <caption className="text-center text-dark">
                Patient Test Report <strong>ID {id}</strong>
              </caption>
              <thead className="table-primary">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{patients.id}</th>
                  <td>{patients.name}</td>
                  <td>{patients.email}</td>
                  <td>{patients.phone}</td>
                  <td>
                    <button className="btn btn-secondary">Print Report</button>
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
