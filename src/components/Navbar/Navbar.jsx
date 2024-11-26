import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { auth } from "../../firebase"; // Import Firebase auth instance
import { signOut, onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const navigate = useNavigate();

  // Firebase Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is logged out
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle Drawer Toggle for Mobile Menu
  const handleDrawerToggle = () => {
    setOpenMobile(!openMobile);
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      localStorage.removeItem("authToken"); // Clear the auth token
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "rgba(110, 22, 212, 0.89)" }}>
        <Toolbar>
          <Typography
            color="gold"
            variant="h4"
            component="div"
            sx={{
              flexGrow: "1",
              fontSize: "1.7rem",
              fontWeight: "600",
            }}
          >
            Health Service
          </Typography>
          {/* Desktop Menu */}
          <Box className="hidden sm:block">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  ` text-xl px-2 py-1 font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold hover:bg-purple-900 hover:text-yellow-200 "
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {isAuthenticated && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  ` text-xl px-2 py-1 font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold hover:bg-purple-900 hover:text-yellow-200 "
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                Dashboard
              </NavLink>
            )}
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  ` text-xl px-2 py-1 font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold hover:bg-purple-900 hover:text-yellow-200 "
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                Login
              </NavLink>
            )}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              sx={{
                color: "white",
                fontSize: "2rem",
                display: { xs: "block", sm: "none" },
              }}
              className="hover:text-yellow-500"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Menu */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={openMobile}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "40%" },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(110, 22, 212, 0.89)",
            }}
          >
            <Typography
              sx={{ textAlign: "center", pt: "2vh", fontSize: "2rem" }}
            >
              HS
            </Typography>
            <Divider />
          </Box>
          <Box
            onClick={handleDrawerToggle}
            sx={{ bgcolor: "rgba(110, 22, 212, 0.89)", pb: "10vh" }}
            className=" flex flex-col text-center"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `py-2 px-3 my-1 mx-3 text-lg font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold  hover:bg-purple-900 hover:text-yellow-200"
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {isAuthenticated && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `py-2 px-3 my-1 mx-3 text-lg font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold  hover:bg-purple-900 hover:text-yellow-200"
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                Dashboard
              </NavLink>
            )}
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "yellow",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `py-2 px-3 my-1 mx-3 text-lg font-sans ${
                    isActive
                      ? "text-yellow-400 font-bold  hover:bg-purple-900 hover:text-yellow-200"
                      : "text-white"
                  } hover:bg-purple-800 hover:shadow-lg hover:rounded  uppercase delay-100 ease-in-out`
                }
              >
                Login
              </NavLink>
            )}
          </Box>
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

export default Navbar;
