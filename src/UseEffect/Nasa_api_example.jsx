import React, { useState, useEffect } from "react";

const Nasa_Api_example = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=sa9bwH9OGuXeOrC8o3Ok43bavIYewf5yoOHOJNkI"
        );
        const data = await res.json();
        console.log(data);
        setContent(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl">{content.title}</h1>
      <p>{content.explanation}</p>
      <img src={content.hdurl} alt="img"></img>
      
     
    </>
  );
};

export default Nasa_Api_example;
