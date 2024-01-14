import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get(
      "http://getting-env.eba-mhzhmyb7.ap-south-1.elasticbeanstalk.com/getData"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Hello from frontend</h1>
      <div>{data}</div>
    </div>
  );
}

export default App;
