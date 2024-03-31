"use client";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {Data.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </>
  );
};

export default Api;
