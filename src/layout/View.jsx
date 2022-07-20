import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const view = () => {
  return (
    <div className="app-view">
      <Header />
      <main className="app-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default view;
