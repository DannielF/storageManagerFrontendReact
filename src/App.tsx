import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Product from "./pages/product/Product";
import Nav from "./components/nav/Nav";
import NotFound from "./components/not-found/Not-found";

function App() {
  return (
    <div className="app">
      <h1>Storage Manager</h1>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
