import React from "react";
import logo from "../img/logo.svg";
const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="p-3 flex justify-between mx-auto max-w-7xl">
        <img alt="Calendly logo" className="h-8" src={logo} />
        <div>Options</div>
        <div>Login getStarted</div>
      </div>
    </header>
  );
};

export default Header;
