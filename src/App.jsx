import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Detail from "./assets/pages/Detail";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
