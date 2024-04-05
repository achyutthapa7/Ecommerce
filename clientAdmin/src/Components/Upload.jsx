// import React, { useEffect, useRef, useState } from "react";
// import UseFetch from "./UseFetch";
// import AddedProducts from "./AddedProducts";
// import uploadpng from "../images/upload.png";
// const Upload = () => {
//   const [data] = UseFetch("http://localhost:3000/getAllProducts");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (data) {
//       setProducts(data);
//     }
//   }, [data]);

//   const img = useRef();
//   const imgInput = useRef();
//   const [input, setInput] = useState({
//     title: "",
//     description: "",
//     oldPrice: Number,
//     newPrice: Number,
//     category: "Men",
//   });

//   const [imgSrc, setImgSrc] = useState(uploadpng);
//   const { title, description, oldPrice, newPrice, category } = input;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await sendPostRequest();
//     await fetch("http://localhost:3000/getAllProducts")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   };

//   const sendPostRequest = async () => {
//     const formData = new FormData();
//     formData.append("products", imgInput.current.files[0]);

//     try {
//       const res = await fetch("http://localhost:3000/uploadImage", {
//         method: "POST",
//         body: formData,
//       });
//       if (res.status == 500) {
//         alert("all field is required");
//       } else if (res.status == 200) {
//         const data = await res.json();
//         const response = await fetch("http://localhost:3000/uploadProduct", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify({
//             productTitle: title,
//             productDescription: description,
//             oldPrice,
//             newPrice,
//             category,
//             productImage: data.url,
//           }),
//         });
//         if (response.status === 200) {
//           alert("Added");
//         } else if (response.status === 400) alert("all field is required");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };
//   const imageHandler = () => {
//     setImgSrc(URL.createObjectURL(imgInput.current.files[0]));
//   };
//   return (
//     <>
//       <div className="form_container">
//         <form
//           className="form"
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//         >
//           <input
//             type="text"
//             placeholder="Product Title"
//             name="title"
//             value={title}
//             onChange={handleChange}
//           />
//           <textarea
//             placeholder="Product Description"
//             name="description"
//             value={description}
//             onChange={handleChange}
//           ></textarea>
//           <input
//             type="number"
//             placeholder="Old price"
//             name="oldPrice"
//             // value={oldPrice}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             placeholder="New price"
//             name="newPrice"
//             // value={newPrice}
//             onChange={handleChange}
//           />
//           <select name="category" onChange={handleChange}>
//             <option value="Men" name="Men">
//               Men
//             </option>
//             <option value="Women" name="Women">
//               Women
//             </option>
//             <option value="Kid" name="Kid">
//               Kid
//             </option>
//           </select>

//           <label htmlFor="file">
//             <img src={imgSrc} alt="image" ref={img} />
//           </label>
//           <input type="file" onChange={imageHandler} ref={imgInput} id="file" />
//           <div className="btn-container">
//             <button>Upload</button>
//           </div>
//         </form>
//       </div>
//       <h1>Added Products</h1>
//       {products.map((prod) => (
//         <AddedProducts
//           key={prod._id}
//           products={prod}
//           setProducts={setProducts}
//         />
//       ))}
//     </>
//   );
// };

// export default Upload;

import React, { useEffect, useRef, useState } from "react";
import UseFetch from "./UseFetch";
import AddedProducts from "./AddedProducts";
import uploadpng from "../images/upload.png";

const Upload = () => {
  const [data] = UseFetch("http://localhost:3000/getAllProducts");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const img = useRef();
  const imgInput = useRef();
  const [input, setInput] = useState({
    title: "",
    description: "",
    oldPrice: "",
    newPrice: "",
    category: "Men",
  });

  const [imgSrc, setImgSrc] = useState(uploadpng);
  const { title, description, oldPrice, newPrice, category } = input;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendPostRequest();
    await fetch("http://localhost:3000/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  const sendPostRequest = async () => {
    const formData = new FormData();
    formData.append("products", imgInput.current.files[0]);

    try {
      const res = await fetch("http://localhost:3000/uploadImage", {
        method: "POST",
        body: formData,
      });
      if (res.status == 500) {
        alert("all field is required");
      } else if (res.status == 200) {
        const data = await res.json();
        const response = await fetch("http://localhost:3000/uploadProduct", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            productTitle: title,
            productDescription: description,
            oldPrice,
            newPrice,
            category,
            productImage: data.url,
          }),
        });
        if (response.status === 200) {
          alert("Added");
        } else if (response.status === 400) alert("all field is required");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const imageHandler = () => {
    setImgSrc(URL.createObjectURL(imgInput.current.files[0]));
  };

  // Styles object
  const styles = {
    formContainer: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      margin: "5px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      height: "50px",
      color: "grey",
    },
    label: {
      cursor: "pointer",
    },
    imagePreview: {
      maxWidth: "200px",
      maxHeight: "200px",
    },
    btnContainer: {
      textAlign: "center",
    },
    btn: {
      padding: "10px 20px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      width: "100%",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    btnHover: {
      backgroundColor: "#0056b3",
    },
    priceContainer: {
      display: "flex",
      gap: "10px",
    },
  };

  return (
    <>
      <div style={styles.formContainer}>
        <form
          style={styles.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            type="text"
            placeholder="Product Title"
            name="title"
            value={title}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            placeholder="Product Description"
            name="description"
            value={description}
            onChange={handleChange}
            style={styles.input}
          ></textarea>
          <div style={styles.priceContainer}>
            <input
              type="number"
              placeholder="Old price"
              name="oldPrice"
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="New price"
              name="newPrice"
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <select name="category" onChange={handleChange} style={styles.input}>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kid</option>
          </select>

          <label htmlFor="file" style={styles.label}>
            <img
              src={imgSrc}
              alt="image"
              ref={img}
              style={styles.imagePreview}
            />
          </label>
          <input
            type="file"
            onChange={imageHandler}
            ref={imgInput}
            id="file"
            style={{ display: "none" }}
          />
          <div style={styles.btnContainer}>
            <button style={styles.btn}>Upload</button>
          </div>
        </form>
      </div>
      <h1>Added Products</h1>
      {products.map((prod) => (
        <AddedProducts
          key={prod._id}
          products={prod}
          setProducts={setProducts}
        />
      ))}
    </>
  );
};

export default Upload;
