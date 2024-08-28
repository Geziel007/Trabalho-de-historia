import React from "react";
import "./NavBar.css";
import Home from "../../pages/home/Home";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const labels = [
    { titulo: "home", page: "/" },
    { titulo: "Trabalhos", page: "/Trabalhos" },
    { titulo: "Sobre", page: "/Sobre" },
  ];

  return (
    <div className="flex-titulo">
      {labels.map((item) => (
        <div key={item} className="flex-titulo">
          <div>
            <NavLink to={item.page} className="titulo">
              {item.titulo}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
