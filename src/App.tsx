import React, { useEffect, useState } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { NavBar } from "./components/NavBar";
import { EuiThemeProvider } from "@elastic/eui";
import axios from "axios";
import { Reviews } from "./pages/Reviews";
import { SingleReview } from "./pages/SingleReview";

function App() {
  const [data, setData] = useState(); // State to contain reviews

  // effect to run fetching of the data on page render
  useEffect(() => {
    const fetchData = async () => {
      // fetches list of reviews
      const reviews = await axios({
        method: "get",
        url: "https://shakespeare.podium.com/api/reviews",
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      });

      // sets state to hold list of reviews
      setData(reviews.data);
    };
    fetchData();
  }, []);

  return (
    <EuiThemeProvider>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Reviews data={data} />} />
          <Route path=":id" element={<SingleReview />} />
        </Routes>
      </Router>
    </EuiThemeProvider>
  );
}

export default App;
