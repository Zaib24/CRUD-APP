import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../service/api';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  styled,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  border: 2px solid grey;
  & > table,
  th,
  td {
    border: 1px solid grey;
    text-align: center;
  }
`;
const THead = styled(TableRow)`
  background: #23074d;
  background: -webkit-linear-gradient(to right, #cc5333, #23074d);
  background: linear-gradient(to right, #cc5333, #23074d);
  & > th {
    color: white;
    font-size: 20px;
    font-style: italic;
  }
`;
const Heading = styled(Typography)`
  margin-top: 20px;
`;
const Edit = styled(Link)`
  text-decoration: none;
  color: white;
`;

function AllUsers() {
  // useState
  const [users, setUsers] = useState([]);
  // Show All Users
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };
  // Delete Users
  const deleteClick = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  // useEffect
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <Heading variant="h4">All Added Users</Heading>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell colSpan={2}>Actions</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained">
                  <Edit to={`/edit/${user._id}`}>Edit</Edit>
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteClick(user._id)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
}

export default AllUsers;
