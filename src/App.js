import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Decentralized from "./components/Decentralized";
import Built from "./components/Built";
import Avalanche from "./components/Avalanche";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Marketplace />
      <Decentralized />
      <Built />
      <Avalanche />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
