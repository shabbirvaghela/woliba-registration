import React from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between">
      <img
        src={logo}
        alt="Woliba"
        className="h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />

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
