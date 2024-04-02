import React from "react";
import logo from "../img/logo.svg";
const Header = () => {
  return (
    <div className="bg-white p-3 flex justify-between">
      <img alt="Calendly logo" className="h-8" src={logo} />
      <div>Options</div>
      <div>Login getStarted</div>
    </div>
  );
};

export default Header;
