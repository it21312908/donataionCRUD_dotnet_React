import axios from 'axios';

const API_URL = 'http://localhost:5203/api/DCandidate'; // Adjust the URL to match your backend API

const getAll = () => {
  return axios.get(API_URL);
};

const get = id => {
  return axios.get(`${API_URL}/${id}`);
};

const create = data => {
  return axios.post(API_URL, data);
};

const update = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

const remove = id => {
  return axios.delete(`${API_URL}/${id}`);
};

const DCandidateService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default DCandidateService;
