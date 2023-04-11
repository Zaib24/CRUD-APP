import axios from 'axios';

const URL = 'http://localhost:8000';
// To Create Users
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('Error while Creating API', error);
  }
};
// To Fetch Users
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log('Error while calling getUsers API.', error);
  }
};

// To Edit Users
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling getUser API.', error);
  }
};

// To Update Users
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log('Error while calling editUser API.', error);
  }
};

// To Delete Users
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling DeleteUser API.');
  }
};
