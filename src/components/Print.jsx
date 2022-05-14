import React from "react";
import logo from "../images/logo.png";

const Print = () => {
  return (
    <>
      <div className="container">
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
                  <td>10</td>
                  <th>Name:</th>
                  <td>Ahmad Ali</td>
                  <th>Email:</th>
                  <td>ahmad@email.com</td>
                  <th>Phone Number:</th>
                  <td>03211234567</td>
                </tr>
                <tr>
                  <th>Age:</th>
                  <td>30</td>
                  <th>Referd By:</th>
                  <td>DR Ali</td>
                  <th>Address:</th>
                  <td>Lahore, Pakistan</td>
                  <th>Gender:</th>
                  <td>Male</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
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
                  <th>Negtive</th>
                  <td>Negtive/Postive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Print;
