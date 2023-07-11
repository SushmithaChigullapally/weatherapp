import React, { useState } from "react";
import "./Image.css";
import axios from "axios";

export function Upload() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState("");

  function handleChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  const fetchWeatherData = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        // const response = await fetch("http://localhost:5000/", {
        //   method: "POST",
        //   body: formData,
        // });

        // const data = await response.json();
        // setRes(data.predicted_class);
        const response = await axios.post("http://localhost:5000/", formData);

        const data = response.data;
        setRes(data.predicted_class);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-container">
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={file ? URL.createObjectURL(file) : null} className="small-image" />
        <button type="submit">Submit</button>
        <div>{res}</div>
      </div>
    </form>
  );
}

export default Upload;