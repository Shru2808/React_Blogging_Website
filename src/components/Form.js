import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the form data
    console.log(formData);

    // You can perform additional actions here, such as sending the data to a server

    // Reset the form
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <h2> Fill in the Experience </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Companyname" className="form-label">
            Company Name
          </label>
          <input
            type="name"
            className="form-control"
            id="companyname"
            name="Companyname"
            placeholder="Company Name"
            value={formData.Companyname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="JobRole" className="form-label">
            Job Role
          </label>
          <input
            type="name"
            className="form-control"
            id="JobRole"
            name="JobRole"
            placeholder="Job Role"
            value={formData.JobRole}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Package" className="form-label">
            Stipend/Package
          </label>
          <input
            type="text"
            className="form-control"
            id="Package"
            name="Package"
            placeholder="Stipend/Package"
            value={formData.Package}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Duration" className="form-label">
            Work Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="Duration"
            name="Duration"
            placeholder="Work Duration"
            value={formData.Duration}
            onChange={handleChange}
          />
        </div>
        <h4>Hiring Process</h4>
        <div class="container">
          <label htmlFor="dropdown">Rounds</label>
          <select class="form-control" id="dropdown">
            <option value="">-- Select --</option>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </select>
        </div>
        <div class="container">
          <label for="message-input">Description of each round</label>
          <textarea class="form-control" id="message-input" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
