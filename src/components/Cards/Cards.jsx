import React from "react";
import "./style.css";

const Cards = ({ img, nome, desc, bruto, promo, parcelas, parcelaPreco }) => {
  return (
    <div className="card">
      <picture className="picture">
        <img src={img} alt="produto" />
      </picture>
      <h3 className="nome">{nome}</h3>
      <h4 className="desc">{desc}</h4>
      <h4 className="bruto">De: R${bruto},00</h4>
      <h5 className="promo">Por: R${promo},00</h5>
      <p className="parcelas">
        ou {parcelas}x de: R${parcelaPreco}0
      </p>
      <button className="btn-card">Comprar</button>
    </div>
  );
};

export default Cards;
