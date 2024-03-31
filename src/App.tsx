import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import { useState } from "react";

function App() {
  const [isFetching, setFetch] = useState(true);
  const [data, setData] = useState();
  fetch("/data/data.json")
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse JSON data
      return response.json();
    })
    .then((data) => {
      setFetch(false);
      setData(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Fetch error:", error);
    });

  return (
    <HashRouter>
      {!isFetching && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio data={data} />} />
          </Route>
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
