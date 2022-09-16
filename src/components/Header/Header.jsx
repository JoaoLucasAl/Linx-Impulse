import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="texts">
        <p className="p1">uma seleção de produtos</p>
        <p className="p2">especial para você</p>
        <p className="p3">
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
      <div className="btns_div">
        <button className="btn">Conheça a Linx</button>
        <button className="btn">Ajude o algoritmo</button>
        <button className="btn">Seus produtos</button>
        <button className="btn">Compartilhe</button>
      </div>
    </div>
  );
};

export default Header;
