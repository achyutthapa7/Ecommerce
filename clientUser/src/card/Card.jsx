import React, { useContext } from "react";
import { context } from "../context/Context";

const Card = ({ products, setIsLoginModalOpen, isAuthenticate }) => {
  const {
    dispatch,
    state: { cart },
  } = useContext(context);
  const isInCart = cart.some((prod) => prod._id === products._id);
  const productCardStyles = {
    container: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "20px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%",
      height: "200px",
      marginBottom: "15px",
      objectFit: "cover",
    },
    productName: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    productDescription: {
      marginBottom: "10px",
    },
    price: {
      fontSize: "16px",
      color: "#888",
      marginBottom: "10px",
    },
    category: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    addToCartButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    removeFromCartButton: {
      backgroundColor: "red",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
  };

  const handleClick = async (e) => {
    if (isAuthenticate) {
      dispatch({
        type: "ADD_TO_CART",
        payload: products,
      });
    } else {
      setIsLoginModalOpen(true);
    }
  };
  return (
    <div style={productCardStyles.container}>
      <img
        src={products.productImage}
        alt="Product"
        style={productCardStyles.image}
      />
      <div style={productCardStyles.productName}>{products.productTitle}</div>
      <div style={productCardStyles.productDescription}>
        {products.productDescription}
      </div>
      <div style={productCardStyles.price}>
        <span style={{ textDecoration: "line-through", marginRight: "15px" }}>
          ${products.oldPrice}
        </span>
        ${products.newPrice}
      </div>
      <div style={productCardStyles.category}>{products.category}</div>
      {isInCart ? (
        <button
          style={productCardStyles.removeFromCartButton}
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: products._id,
            });
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button style={productCardStyles.addToCartButton} onClick={handleClick}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Card;
