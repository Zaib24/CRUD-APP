import React, { useState } from 'react';
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const Submit = styled(Button)`
  margin-top: 28px;
  background-color: black;
  color: #ffd700;
`;

function AddUser() {
  const navigate = useNavigate();
  const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
  };
  // Hook for Input Fields
  const [user, setUser] = useState(defaultValue);
  // To Handle Input Values
  const submitHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // Add user to Backend
  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  };
  return (
    <div>
      <Container
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Typography variant="h4">Add User Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input type="text" onChange={submitHandler} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input type="text" onChange={submitHandler} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input type="email" onChange={submitHandler} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input type="number" onChange={submitHandler} name="phone" />
        </FormControl>
        <Submit
          variant="contained"
          onClick={() => {
            addUserDetails();
          }}
        >
          Submit
        </Submit>
      </Container>
    </div>
  );
}

export default AddUser;
