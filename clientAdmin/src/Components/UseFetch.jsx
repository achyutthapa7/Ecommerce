import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const products = data.products;
      setData(products);
    };
    fetchData();
  }, []);
  return [data];
};

export default UseFetch;
