import React from "react";
import "./Home.css";
import NavBar from "../../components/navBar/NavBar";

const Home = ({ labels }) => {
  return (
    <div className="bottom">
      <NavBar />

      <div className="conteudo">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
