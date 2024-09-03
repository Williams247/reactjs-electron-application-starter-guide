import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/home.tsx";
import { AboutScreen } from "./screens/about.tsx";
import { ScreenNotFound } from "./screens/404.tsx";

export function AppPathView() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<ScreenNotFound />} />
        </Routes>
      </Router>
    </>
  );
}
