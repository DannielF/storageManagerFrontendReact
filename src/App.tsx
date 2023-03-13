import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Product from "./product/Product";
import Nav from "./shared/nav/Nav";
import NotFound from "./shared/not-found/Not-found";

function App() {
  return (
    <div>
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
