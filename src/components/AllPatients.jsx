import React from "react";

const AllPatients = () => {
  return (
    <div>
      <h1>All Patients</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
            <th scope="col">Refered By</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
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
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
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
  );
};

export default AllPatients;
