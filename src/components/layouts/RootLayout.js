import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../core/Header";
import Footer from "../core/Footer";
function RootLayout() {
  return (
    <div>
      <header className="p-5">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
