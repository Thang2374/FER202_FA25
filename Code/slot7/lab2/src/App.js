import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";

function App() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <MenuSection />
      <BookingSection />
    </div>
  );
}

export default App;
