import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { Home, HeroList } from "../pages";

const RouteCustom: React.FC  = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/hero-list/:heroName" caseSensitive={false} element={<HeroList />} />
      </Routes>
    </Router>
  );
};

export default RouteCustom;