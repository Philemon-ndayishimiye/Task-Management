import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Add from "../pages/Add";
import Incomplete from "../pages/Incomplete";
import Filter from "../pages/Filter";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/incomplete" element={<Incomplete />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
}
