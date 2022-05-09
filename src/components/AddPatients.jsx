import axios from "axios";
import React, { useState } from "react";
import covid from "../images/covid.gif";

const AddPatients = () => {
  // Creating State for Patient
  const [patients, setPatients] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    refer: "",
    address: "",
  });

  // Handling on Change for Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatients((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
    // console.log(patient);
  };

  // On Form Submition
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/patients", patients);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={covid} alt="covid-img" />
          </div>

          <div className="col-md-6">
            <h3 className="text-center">Add New Patient</h3>
            <form onSubmit={handleSubmitForm}>
              <div className="my-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={patients.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Jhon Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={patients.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="email@email.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  value={patients.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="0123456789"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  value={patients.age}
                  onChange={handleChange}
                  name="age"
                  placeholder="30"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="refer" className="form-label">
                  Refered by DR
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="refer"
                  value={patients.refer}
                  onChange={handleChange}
                  name="refer"
                  placeholder="Dr Ahmad"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  value={patients.address}
                  onChange={handleChange}
                  rows="3"
                  name="address"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Patient
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPatients;
