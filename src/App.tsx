import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: data, isFetching } = useFetch("/data/data.json");
  let dataString;
  let dataParsed;
  if (!isFetching) {
    dataString = JSON.stringify(data);
    dataParsed = JSON.parse(dataString);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {!isFetching && (
            <Route path="portfolio" element={<Portfolio data={dataParsed} />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
