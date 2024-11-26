import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Layout from "../components/Layout/Layout";

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData); // Pass the form data to the onSubmit prop
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        contactNo: "",
        email: "",
        requirements: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Fill in the details below, and we will contact you soon.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
          }}
        >
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Contact No"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            type="tel"
            fullWidth
            required
          />
          <TextField
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            multiline
            maxRows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 2, bgcolor: "rgba(110, 22, 212, 0.89)" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
