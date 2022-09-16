import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const InviteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="invite-form">
      <div className="sep1">
        <div className="sep2">
          <span className="linha"></span>
          <p className="text-selecao">Compartilhe a novidade</p>
          <span className="linha"></span>
        </div>
      </div>
      <div className="invite-form_text">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </div>
      <form onSubmit={handleSubmit()}>
        <div className="invite-form_form"  >
          <div className="amigo_nome invite-form_input">
            <label>Nome do seu amigo:</label>
            <input
              type="text"
              {...register("nome", {
                required: true,
              })}
            />
            {errors.nome && <span>Esse campo é obrigatório.</span>}
          </div>
          <div className="amigo_email invite-form_input">
            <label>Email:</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Insira um email valido",
                },
              })}
            />
            {errors.email && <span>Esse campo é obrigatório.</span>}
          </div>
        </div>
        <div className="div_invite-form_submit">
          <button className="invite-form_submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default InviteForm;
