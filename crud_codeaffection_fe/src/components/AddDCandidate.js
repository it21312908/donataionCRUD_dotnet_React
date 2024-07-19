import React, { useState } from 'react';
import DCandidateService from '../services/DCandidateService';

const AddDCandidate = () => {
  const initialDCandidateState = {
    id: null,
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    bloodGroup: "",
    address: ""
  };
  const [dCandidate, setDCandidate] = useState(initialDCandidateState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDCandidate({ ...dCandidate, [name]: value });
  };

  const saveDCandidate = () => {
    var data = {
      fullName: dCandidate.fullName,
      mobile: dCandidate.mobile,
      email: dCandidate.email,
      age: dCandidate.age,
      bloodGroup: dCandidate.bloodGroup,
      address: dCandidate.address
    };

    DCandidateService.create(data)
      .then(response => {
        setDCandidate({
          id: response.data.id,
          fullName: response.data.fullName,
          mobile: response.data.mobile,
          email: response.data.email,
          age: response.data.age,
          bloodGroup: response.data.bloodGroup,
          address: response.data.address
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newDCandidate = () => {
    setDCandidate(initialDCandidateState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDCandidate}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              required
              value={dCandidate.fullName}
              onChange={handleInputChange}
              name="fullName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              required
              value={dCandidate.mobile}
              onChange={handleInputChange}
              name="mobile"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={dCandidate.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              required
              value={dCandidate.age}
              onChange={handleInputChange}
              name="age"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              className="form-control"
              id="bloodGroup"
              required
              value={dCandidate.bloodGroup}
              onChange={handleInputChange}
              name="bloodGroup"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={dCandidate.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <button onClick={saveDCandidate} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddDCandidate;
