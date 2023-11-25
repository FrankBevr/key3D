import { useEffect, useState } from "react";

const ViewBackend = () => {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    async function fetcho() {
      try {
        const res = await fetch("http://localhost:3000/api");
        const data = await res.json();
        setBackendData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetcho();
  }, []);

  return (
    <div style={{ border: "2px solid green", margin: 20, borderRadius: 10 }}>
      <h1>FetchBackend - Component</h1>
      <h2>Title:</h2>
      <p>{backendData.title}</p>
      <h2>Why:</h2>
      <p>{backendData.why}</p>
      <h2>inUse:</h2>
      <p>{backendData.inUse ? "true" : "false"}</p>
    </div>
  );
};

export default ViewBackend;
