import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AdminDashboard from "./components/Admin/AdminDashboard";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore configuration
import Login from "./components/User/Login";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  // Function to handle form submission and save to Firestore
  const handleFormSubmit = async (data) => {
    try {
      const submissionData = {
        ...data,
        submissionDate: new Date().toISOString(), // Add current date and time
      };
      await addDoc(collection(db, "submissions"), submissionData);
      console.log("Document successfully written!", submissionData);
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" Component={Home} />
        <Route path="/about-us" Component={About} />
        <Route path="/services" Component={Service} />
        <Route
          path="/contact-us"
          element={<Contact onSubmit={handleFormSubmit} />}
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
