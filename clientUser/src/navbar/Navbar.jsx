import React, { useContext, useState } from "react";
import { context } from "../context/Context";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
const Navbar = ({ onClick, isAuthenticate, handlelogout }) => {
  const {
    state: { cart },
  } = useContext(context);

  const navigationStyles = {
    container: {
      backgroundColor: "#f0f0f0",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 20px",
      boxShadow: "1px -1px 15px 1px black",
    },
    logo: {
      width: "55px",
      height: "55px",
      borderRadius: "100vh",
      objectFit: "cover",
      mixBlendMode: "multiply",
    },
    filter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
    },
    filterItem: {
      marginRight: "20px",
      cursor: "pointer",
      color: "#333",
    },
    loginButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
    },
    logoutButton: {
      backgroundColor: "red",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
    },
    cartIcon: {
      width: "25px",
      height: "25px",
      color: "#333",
      cursor: "pointer",
      position: "relative",
    },
    cartCount: {
      position: "absolute",
      top: "18px",
      right: "163px",
      backgroundColor: "brown",
      borderRadius: "50%",
      width: "14px",
      height: "14px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "12px",
    },
  };

  return (
    <div style={navigationStyles.container}>
      <Link to="/">
        <img src={logo} alt="Company Logo" style={navigationStyles.logo} />
      </Link>

      <div style={navigationStyles.filter}>
        <div style={navigationStyles.filterItem}>Men</div>
        <div style={navigationStyles.filterItem}>Women</div>
        <div style={navigationStyles.filterItem}>Kids</div>
      </div>
      <div style={navigationStyles.filter}>
        {isAuthenticate ? (
          <button style={navigationStyles.logoutButton} onClick={handlelogout}>
            Logout
          </button>
        ) : (
          <button style={navigationStyles.loginButton} onClick={onClick}>
            Login
          </button>
        )}

        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={navigationStyles.cartIcon}
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </Link>
        <div style={navigationStyles.cartCount}>{cart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
