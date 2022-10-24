import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Counter from "../Counter";
import Toggle from "../handlingEvents";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
