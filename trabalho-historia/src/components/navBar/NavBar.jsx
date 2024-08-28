import React from "react";
import "./NavBar.css";
import Home from "../../pages/home/Home";
import BasicModal from "./modalNav/Modal";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const labels = [
    { titulo: "Home", page: "/" },
    { titulo: "Trabalhos", page: "/Trabalhos" },
    { titulo: "Sobre", page: "/Sobre" },
  ];

  return (
    <div className="flex-navBar">
      <div className="flex-titulo">
        {labels.map((item) => (
          <div key={item} className="flex-titulo">
            <div class="container red topBotomBordersOut">
              <a href={item.page} className="titulo">
                {item.titulo}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-modal">
        <BasicModal />
      </div>
    </div>
  );
};

export default NavBar;
