import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

const AllPatients = () => {
  // Defining State for Patients
  const [patients, setPatients] = useState([]);
  // console.log(patients);
  // Defining getPatients function
  const getPatients = async () => {
    const result = await axios.get("http://localhost:3001/patients", patients);
    // for Heroku
    // const result = await axios.get("/patients", patients);
    setPatients(result.data);
  };

  // Getting Patients from DB by using useEffect hook
  useEffect(() => {
    getPatients();
  }, []);

  // Deleting Patient
  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:3001/patients/${id}`, patients);
    // Tostify Notification
    toast.error("Deleted Successfully!", {
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // for Heroku
    // await axios.delete(`/patients/${id}`, patients);
    getPatients();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-info my-5">All Patients</h1>
            <table className="table table-bordered text-center all-table">
              <thead className="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Refered By</th>
                  <th scope="col">Address</th>
                  <th scope="col" colSpan="3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    {/* <td>{patient.id}</td> */}
                    <td>{patient.name}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.refer}</td>
                    <td>{patient.address}</td>
                    <td>
                      <Link to={`/view/${patient.id}`}>
                        <span className="text-success">
                          <FaUserAlt />
                          {/* View */}
                        </span>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/edit/${patient.id}`}>
                        <span className="text-primary">
                          <FaEdit />
                          {/* edit */}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {/* <Link onClick={() => deletePatient(patient.id)}>
                        <span className="text-danger">
                          <AiFillDelete />
                          Delete
                        </span>
                      </Link> */}
                      <button onClick={() => deletePatient(patient.id)}>
                        <span className="text-danger">
                          <AiFillDelete />
                          {/* Delete */}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllPatients;
