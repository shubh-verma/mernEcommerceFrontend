import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get("http://api.shubhamverma.xyz/getData");
    console.log(response);
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
