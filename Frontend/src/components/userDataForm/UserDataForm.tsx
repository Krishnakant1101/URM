import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  MenuItem,
} from "@mui/material";
import { useAppDispatch } from "../../redux/store/store";
import { addUser } from "../../redux/features/UserDataSlice";

interface UserDataFormProps {
  closeModal: () => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch(); // Correctly placed dispatch initialization

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    salary: "",
    department: "",
  });

  // Departments list
  const departments = [
    "Human Resources",
    "IT",
    "Financial Accounting",
    "Sales",
    "Application Development",
    "Management",
    "Marketing",
    "Helpdesk",
    "Software Development",
    "Technical Support",
  ];

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const { firstName, lastName, email, mobile, address, salary, department } = formData;
    if (!firstName || !lastName || !email || !mobile || !address || !salary || !department) {
      alert("All fields are required.");
      return;
    }

    try {
      
      // Dispatch the addUser action
      await dispatch(addUser(formData));

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        salary: "",
        department: "",
      });

      closeModal(); // Close the modal
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Failed to add user data. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Employee Details Form
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name & Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Email & Mobile */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Salary & Department */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Department"
              name="department"
              select
              value={formData.department}
              onChange={handleChange}
              fullWidth
              required
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Button
            onClick={closeModal}
            variant="contained"
            color="secondary"
            sx={{
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserDataForm;
