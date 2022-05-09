import React from "react";
// import { FaEdit } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllPatients = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center my-5">All Patients</h1>
            <table className="table table-bordered table-light text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Refered By</th>
                  <th scope="col">Address</th>
                  <th scope="col" colspan="3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>mark@email.com</td>
                  <td>111-222-333</td>
                  <td>55</td>
                  <td>Dr Ahmad</td>
                  <td>Lahore, Pakistan</td>
                  <td>
                    <Link to="/edit">
                      <span className="text-success">
                        {/* <FaUserAlt /> */}
                        View
                      </span>
                    </Link>
                  </td>
                  <td>
                    <Link to="/edit">
                      <span className="text-primary">
                        {/* <FaEdit /> */}
                        edit
                      </span>
                    </Link>
                  </td>
                  <td>
                    <Link to="/delete">
                      <span className="text-danger">
                        {/* <AiFillDelete /> */}
                        Delete
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Jhon</td>
                  <td>mark@email.com</td>
                  <td>111-222-333</td>
                  <td>55</td>
                  <td>Dr Ahmad</td>
                  <td>Lahore, Pakistan</td>
                  <td>View</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Smith</td>
                  <td>mark@email.com</td>
                  <td>111-222-333</td>
                  <td>55</td>
                  <td>Dr Ahmad</td>
                  <td>Lahore, Pakistan</td>
                  <td>View</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPatients;
