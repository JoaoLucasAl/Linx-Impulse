import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/UseFetch";
import Forms from "../Forms/Forms";
import Cards from "../Cards/Cards";
import "./style.css";

import InviteForm from "../InviteForms/InviteForms";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => useFetch(data, setData, page), [page]);

  return (
    <div className="main">
      <div className="grid">
        <div className="div_text">
          <p className="titulo">Ajude o algoritmo a ser mais certeiro</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu
            urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper
            pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis
            ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean
            lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum vel urna tortor. Vivamus et arcu non felis tristique
            eleifend.{" "}
          </p>
          <p className="text">
            Morbi eu condimentum urna. Curabitur eu magna eget turpis
            condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
            purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
            Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
            varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi
            viverra, magna ac luctus commodo, odio ante suscipit libero, at
            mattis augue est vel metus.
          </p>
        </div>
        <Forms />
      </div>
      <div className="sep1">
        <div className="sep2">
          <span className="linha"></span>
          <p className="text-selecao">Sua seleção especial</p>
          <span className="linha"></span>
        </div>
      </div>
      <div className="cards">
        {data.length > 0
          ? data.map((item, index) => {
              return (
                <Cards
                  key={index}
                  img={item.image}
                  nome={item.name}
                  desc={item.description}
                  bruto={item.oldPrice}
                  promo={item.price}
                  parcelas={item.installments.count}
                  parcelaPreco={item.installments.value}
                />
              );
            })
          : ""}
      </div>
      <div className="maisItens">
        <button onClick={() => setPage(page + 1)}>
          Adquira mais produtos aqui
        </button>
      </div>
      <InviteForm />
    </div>
  );
};

export default Main;
