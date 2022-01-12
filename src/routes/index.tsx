import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { Home, HeroList, HeroDetails } from "../pages";

const RouteCustom: React.FC  = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/hero-list/:heroName" caseSensitive={false} element={<HeroList />} />
        <Route path="/hero-details/:id" caseSensitive={false} element={<HeroDetails />} />
      </Routes>
    </Router>
  );
};

export default RouteCustom;