import React from "react";
import { Routes, Route } from "react-router-dom";
import View from "./layout/View";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<View />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
