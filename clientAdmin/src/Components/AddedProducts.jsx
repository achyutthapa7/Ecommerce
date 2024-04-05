// import React from "react";

// const AddedProducts = ({ products, setProducts }) => {
//   const handleClick = async () => {
//     try {
//       await fetch("http://localhost:3000/deleteProduct", {
//         method: "DELETE",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ _id: products._id }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setProducts(data.products);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <div className="added_container">
//         <div>
//           <img src={products.productImage} alt="" />
//           <p>{products.productTitle}</p>
//         </div>
//         <p>{products.productDescription}</p>
//         <p>{products.oldPrice}</p>
//         <p>{products.newPrice}</p>
//         <p>{products.category}</p>
//         <p>{products._id}</p>
//         <button onClick={handleClick}>delete</button>
//       </div>
//     </div>
//   );
// };

// export default AddedProducts;
import React from "react";

const AddedProducts = ({ products, setProducts }) => {
  // Styles object
  const styles = {
    addedContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "1px solid #ccc",
    },
    productImage: {
      maxWidth: "100px",
      maxHeight: "100px",
      marginRight: "20px",
    },
    deleteButton: {
      padding: "8px 16px",
      background: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleClick = async () => {
    try {
      await fetch("http://localhost:3000/deleteProduct", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ _id: products._id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.addedContainer}>
      <div>
        <img src={products.productImage} alt="" style={styles.productImage} />
        <p>{products.productTitle}</p>
      </div>
      <p>{products.productDescription}</p>
      <p>${products.oldPrice}</p>
      <p>${products.newPrice}</p>
      <p>{products.category}</p>
      <button style={styles.deleteButton} onClick={handleClick}>
        delete
      </button>
    </div>
  );
};

export default AddedProducts;
