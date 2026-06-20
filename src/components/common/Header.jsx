import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="Woliba" className="h-12" />

      <div className="flex items-center gap-2">
        <span>Language</span>

        <select>
          <option>En</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
