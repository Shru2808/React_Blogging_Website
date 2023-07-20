import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    Companyname: "",
    JobRole: "",
    Package: "",
    Duration: "",
    rounds: 0,
    roundDescriptions: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/forms", formData)
      .then((response) => {
        console.log("submitted", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // Display the form data
    console.log(formData);

    // Reset the form
    setFormData({
      name: "",
      Companyname: "",
      JobRole: "",
      Package: "",
      Duration: "",
      rounds: 0,
      roundDescriptions: [],
    });
  };

  const handleRoundDescriptionChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      roundDescriptions: [
        ...prevFormData.roundDescriptions.slice(0, index),
        value,
        ...prevFormData.roundDescriptions.slice(index + 1),
      ],
    }));
  };

  return (
    <div className="container">
      <h2>Fill in the Experience</h2>
      <form onSubmit={handleSubmit}>
        {/* ... Your existing form inputs ... */}
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
            type="text"
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
            type="text"
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
        <div className="container">
          <label htmlFor="dropdown">Total Rounds</label>
          <select
            className="form-control my-2"
            id="dropdown"
            name="rounds"
            value={formData.rounds}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="container" id="textAreasContainer">
          {/* Dynamically create text areas */}
          {Array.from({ length: formData.rounds }, (_, index) => (
            <div key={index} className="mb-3">
              <textarea
                className="form-control my-3"
                id={`roundDescription${index + 1}`}
                name={`roundDescription${index + 1}`}
                placeholder={`Description of Round ${index + 1}`}
                value={formData.roundDescriptions[index] || ""}
                onChange={(e) => handleRoundDescriptionChange(e, index)}
                rows="8"
              ></textarea>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
