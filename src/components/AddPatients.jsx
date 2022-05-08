import React from "react";

const AddPatients = () => {
  return (
    <div>
      <form>
        <div className="my-3">
          <label for="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Jhon Doe"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="email@email.com"
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="0123456789"
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
            placeholder="30"
          />
        </div>
        <div className="mb-3">
          <label for="refer" className="form-label">
            Refered by DR
          </label>
          <input
            type="text"
            className="form-control"
            id="refer"
            aria-describedby="emailHelp"
            placeholder="Dr Ahmad"
          />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">
            Address
          </label>
          <textarea class="form-control" id="address" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatients;
