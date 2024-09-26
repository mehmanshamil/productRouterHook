import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "./Components/Box";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(async (res) => {
        await setData(res.data);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div
        style={{
          color: "red",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Ana sehife</h1>
      </div>
      <div className="container">
        {data && data.map((item, index) => <Box item={item} key={index} />)}
      </div>
    </>
  );
};

export default Home;
