import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Import Firebase auth instance
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ); // Firebase login
      localStorage.setItem("authToken", userCredential.user.accessToken); // Save token
      navigate("/dashboard"); // Redirect to AdminDashboard
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Admin Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              mb: 4,
              bgcolor: "rgba(110, 22, 212, 0.89)",
              "&:hover": {
                color: "yellow",
                bgcolor: "#5e35b1",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
