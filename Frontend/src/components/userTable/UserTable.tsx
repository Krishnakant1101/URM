import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store/store";
import { getUsers } from "../../redux/features/UserDataSlice";
import {
  Grid,
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
  Avatar,
  TextField,
  Stack,
} from "@mui/material";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  salary: number;
  department: string;
};

const UserDataTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.usersData);

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Filtered users based on the search term
  const filteredUsers = users?.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())   ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase())||
      user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobile.toLowerCase().includes(searchTerm.toLowerCase())
    

  );

  if (error) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={4}>
        {/* User Data Table */}
        <Grid item xs={12} md={8}>
          {!loading ? (
            <Paper
              sx={{
                p: 3,
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
                backgroundColor: "white",
                marginLeft: "10px",
              }}
            >
              {/* Title and Search Bar */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                    pb: 1,
                  }}
                >
                  UserInfo
                </Typography>
                <TextField
                  size="small"
                  variant="standard"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{
                    width: { xs: "100%", sm: "250px" },
                    mt: { xs: 2, sm: 0 },
                  }}
                />
              </Stack>

              {/* Table */}
              <TableContainer
                sx={{
                  maxHeight: 400,
                  overflowY: "auto", // Enable vertical scroll
                }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Avatar
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        First Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Last Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Email
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Mobile
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Department
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", fontWeight: "bold", color: "black" }}
                      >
                        Salary
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                        Address
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers?.length > 0 ? (
                      filteredUsers.map((user) => (
                        <TableRow
                          key={user.id}
                          sx={{
                            "&:nth-of-type(odd)": { bgcolor: "action.hover" },
                            "&:hover": {
                              bgcolor: "action.selected",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <TableCell>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                              {user.firstName[0]}
                            </Avatar>
                          </TableCell>
                          <TableCell>{user.firstName}</TableCell>
                          <TableCell>{user.lastName}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.mobile}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.salary}</TableCell>
                          <TableCell>{user.address}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} align="center">
                          <Typography>No users found</Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                bgcolor: "background.default",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDataTable;
