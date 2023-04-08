import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Wrapper({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Wrapper;
