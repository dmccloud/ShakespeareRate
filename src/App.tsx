import React, { useEffect, useState } from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import "./App.css";
import { NavBar } from "./components/NavBar";
import { EuiThemeProvider } from "@elastic/eui";
import axios from "axios";
import { Reviews } from "./pages/Reviews";

function App() {
  const [data, setData] = useState(); // State to contain reviews

  // Fetches list of review data
  useEffect(() => {
    const fetchData = async () => {
      const reviews = await axios({
        method: "get",
        url: "https://shakespeare.podium.com/api/reviews",
        headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" },
      });
      console.log(reviews.data);
      setData(reviews.data);
    };
    fetchData();
  }, []);

  return (
    <EuiThemeProvider>
      <NavBar />
      <Reviews data={data} />
    </EuiThemeProvider>
  );
}

export default App;
