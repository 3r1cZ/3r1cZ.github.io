import { HashRouter, Route, Routes } from "react-router-dom";
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
    <HashRouter>
      {!isFetching && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/portfolio"
              element={<Portfolio data={dataParsed} />}
            />
          </Route>
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
