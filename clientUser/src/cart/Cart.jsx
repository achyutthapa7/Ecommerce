import React, { useContext, useState } from "react";
import { context } from "../context/Context";

const Cart = ({ cart, isAuthenticate, setIsLoginModalOpen }) => {
  let total = 0;
  if (cart) {
    total = cart.reduce((a, c) => a + c.newPrice, 0);
  }

  const { dispatch } = useContext(context);
  const styles = {
    mainContainer: {
      display: "flex",
    },
    container: {
      fontFamily: "Arial, sans-serif",
      flex: "2",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
    },
    tableHeader: {
      backgroundColor: "#f2f2f2",
    },
    tableRow: {
      backgroundColor: "#f9f9f9",
    },
    tableHeaderRow: {
      backgroundColor: "#e0e0e0",
    },
    tableCell: {
      padding: "10px",
      border: "1px solid #ddd",
    },
    productImage: {
      width: "50px",
      height: "50px",
    },
    removeButton: {
      backgroundColor: "#ff4d4d",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    removeButtonHover: {
      backgroundColor: "#ff6666",
    },
    totalContainer: {
      border: "1px solid black",
      flex: "1",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
    },
    center: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeaderRow}>
              <th style={styles.tableCell}>Image</th>
              <th style={styles.tableCell}>Name</th>
              <th style={styles.tableCell}>Old Price</th>
              <th style={styles.tableCell}>New Price</th>
              <th style={styles.tableCell}>Description</th>
              <th style={styles.tableCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row to demonstrate alternate colors */}
            {cart.map((c) => (
              <tr style={styles.tableRow} key={c._id}>
                <td style={styles.tableCell}>
                  <img
                    src={c.productImage}
                    alt="Product"
                    style={styles.productImage}
                  />
                </td>
                <td style={styles.tableCell}>{c.productTitle}</td>
                <td style={styles.tableCell}>${c.oldPrice}</td>
                <td style={styles.tableCell}>${c.newPrice}</td>
                <td style={styles.tableCell}>{c.productDescription}</td>

                <td style={styles.tableCell}>
                  <button
                    style={styles.removeButton}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor =
                        styles.removeButtonHover.backgroundColor)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor =
                        styles.removeButton.backgroundColor)
                    }
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: c._id,
                      });
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            {/* Additional rows will go here */}
          </tbody>
        </table>
      </div>
      <div style={styles.totalContainer}>
        <h1 style={styles.center}>Total</h1>
        <p style={styles.center}>{total}</p>
      </div>
    </div>
  );
};

export default Cart;
