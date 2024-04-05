import React, { useContext, useEffect, useState } from "react";
import { context } from "./context/Context";
import Navbar from "./navbar/Navbar";
import Card from "./card/Card";
import Cart from "./cart/Cart";
import { Route, Routes } from "react-router-dom";
import LoginModal from "./login/LoginModal";

const App = () => {
  const {
    products: { products },
    state: { cart },
  } = useContext(context);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const Auth = async () => {
    try {
      const res = await fetch("http://localhost:3000/authenticate", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        setIsAuthenticate(true);
      } else {
        setIsAuthenticate(false);
      }
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  Auth();

  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  const handlelogout = async () => {
    try {
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        if (res.ok) {
          alert("Logout Successfully");
          setIsAuthenticate(false);
        }
      });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };
  const cardContainerStyles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(370px,0))",
      placeContent: "center",
      gap: "25px",
      padding: "20px",
      // position: "relative",
    },
  };

  return (
    <div>
      <Navbar
        onClick={handleLoginModalOpen}
        isAuthenticate={isAuthenticate}
        handlelogout={handlelogout}
      />
      <br />
      <br />
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              isAuthenticate={isAuthenticate}
              setIsLoginModalOpen={setIsLoginModalOpen}
            />
          }
        />
        <Route
          path="/"
          element={
            <>
              <h2>All Products</h2>
              <div style={cardContainerStyles.container}>
                {products && products.length > 0 ? (
                  products.map((prod) => (
                    <Card
                      key={prod._id}
                      products={prod}
                      setIsLoginModalOpen={setIsLoginModalOpen}
                      isAuthenticate={isAuthenticate}
                    />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </>
          }
        />
      </Routes>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleLoginModalClose}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
    </div>
  );
};

export default App;
