import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DCandidateList from './components/DCandidateList';
import AddDCandidate from './components/AddDCandidate';
import DCandidate from './components/DCandidate';

function App() {
  return (
    <Router>
      <div className="container">
        <h2>Donation Management System</h2>
        <Routes>
          <Route path="/" element={<DCandidateList />} />
          <Route path="/dcandidates" element={<DCandidateList />} />
          <Route path="/add" element={<AddDCandidate />} />
          <Route path="/dcandidates/:id" element={<DCandidate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
