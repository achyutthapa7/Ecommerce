import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({
  isOpen,
  onClose,
  showLogin,
  setShowLogin,
  setIsLoginModalOpen,
}) => {
  const navigate = useNavigate();
  const modalStyles = {
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: isOpen ? "block" : "none",
      zIndex: 1000, // Increase z-index to make sure the modal is on top of other content
    },
    modalContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "400px",
      width: "90%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a box shadow for a slight elevation effect
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      fontSize: "30px", // Increase font size for better visibility
      color: "#aaa", // Change color to a lighter shade
    },
    title: {
      marginBottom: "20px", // Add margin bottom to the title for spacing
    },
    form: {
      marginTop: "20px", // Add margin top to the form for spacing
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    submitButtonDiv: {
      display: "flex",
      justifyContent: "center",
    },
    submitButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    p: {
      textAlign: "center",
    },
  };
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, emailAddress, password, confirmPassword } =
    input;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ emailAddress, password }),
        credentials: "include",
      });
      if (res.ok) {
        alert("Login Successful");
        setIsLoginModalOpen(false);
        setInput({
          firstName: "",
          lastName: "",
          emailAddress: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Error While Login, Try again");
      }
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };

  const handleClickRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/registration", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          emailAddress,
          password,
          confirmPassword,
        }),
      });
      if (res.ok) {
        alert("Registration Successfull");
        setShowLogin(true),
          setInput({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
          });
      } else {
        alert("Error While Registration, Try again");
      }
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
      {showLogin ? (
        <div>
          <div style={modalStyles.modal}>
            <div style={modalStyles.modalContent}>
              <span
                style={modalStyles.closeButton}
                onClick={onClose}
                role="button"
                aria-label="Close"
              >
                &times;
              </span>
              <h2 style={modalStyles.title}>Login</h2>
              <form style={modalStyles.form}>
                <label>
                  Username:
                  <input
                    type="text"
                    style={modalStyles.input}
                    value={emailAddress}
                    name="emailAddress"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    style={modalStyles.input}
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                </label>
                <div style={modalStyles.submitButtonDiv}>
                  <button
                    type="submit"
                    style={modalStyles.submitButton}
                    onClick={handleClickLogin}
                  >
                    Login
                  </button>
                </div>
                <p style={modalStyles.p}>
                  Don't Have An Account?
                  <a
                    href="#"
                    onClick={() => {
                      setShowLogin(false);
                    }}
                  >
                    Register
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={modalStyles.modal}>
            <div style={modalStyles.modalContent}>
              <span
                style={modalStyles.closeButton}
                onClick={onClose}
                role="button"
                aria-label="Close"
              >
                &times;
              </span>
              <h2 style={modalStyles.title}>Register</h2>
              <form style={modalStyles.form}>
                <label>
                  Firstname:
                  <input
                    type="text"
                    style={modalStyles.input}
                    value={firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Lastname:
                  <input
                    type="text"
                    style={modalStyles.input}
                    value={lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="text"
                    style={modalStyles.input}
                    value={emailAddress}
                    name="emailAddress"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Create Your Password:
                  <input
                    type="password"
                    style={modalStyles.input}
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Confirm Your Password:
                  <input
                    type="password"
                    style={modalStyles.input}
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </label>
                <div style={modalStyles.submitButtonDiv}>
                  <button
                    type="submit"
                    style={modalStyles.submitButton}
                    onClick={handleClickRegistration}
                  >
                    Register
                  </button>
                </div>
                <p style={modalStyles.p}>
                  Already Have An Account?
                  <a
                    href="#"
                    onClick={() => {
                      setShowLogin(true);
                    }}
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
