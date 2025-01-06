import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store/store';
import { fetchUsers } from '../../redux/features/UserDataSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

const UserDataTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" mt={4}>
        {error}
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        User Data
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.salary}</TableCell>
              <TableCell>{user.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDataTable;
