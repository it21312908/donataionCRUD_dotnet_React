import React, { useState, useEffect } from 'react';
import DCandidateService from '../services/DCandidateService';

const DCandidate = props => {
  const initialDCandidateState = {
    id: null,
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    bloodGroup: "",
    address: ""
  };
  const [currentDCandidate, setCurrentDCandidate] = useState(initialDCandidateState);
  const [message, setMessage] = useState("");

  const getDCandidate = id => {
    DCandidateService.get(id)
      .then(response => {
        setCurrentDCandidate(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDCandidate(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentDCandidate({ ...currentDCandidate, [name]: value });
  };

  const updateDCandidate = () => {
    DCandidateService.update(currentDCandidate.id, currentDCandidate)
      .then(response => {
        console.log(response.data);
        setMessage("The candidate was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteDCandidate = () => {
    DCandidateService.remove(currentDCandidate.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/dcandidates");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentDCandidate ? (
        <div className="edit-form">
          <h4>DCandidate</h4>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={currentDCandidate.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={currentDCandidate.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentDCandidate.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={currentDCandidate.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                type="text"
                className="form-control"
                id="bloodGroup"
                name="bloodGroup"
                value={currentDCandidate.bloodGroup}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={currentDCandidate.address}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteDCandidate}>
            Delete
          </button>

          <button type="submit" className="badge badge-success" onClick={updateDCandidate}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a DCandidate...</p>
        </div>
      )}
    </div>
  );
};

export default DCandidate;
