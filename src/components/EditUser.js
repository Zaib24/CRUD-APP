import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
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
  // Update User Details
  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/all');
  };

  //   To Fetch Old Input Values
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  useEffect(() => {
    loadUserDetails();
  }, []);
  return (
    <div>
      <Container
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Typography variant="h4">Edit User Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            onChange={submitHandler}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            type="text"
            onChange={submitHandler}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            onChange={submitHandler}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            type="number"
            onChange={submitHandler}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="success"
          onClick={() => {
            editUserDetails();
          }}
        >
          Update
        </Button>
      </Container>
    </div>
  );
}

export default EditUser;
