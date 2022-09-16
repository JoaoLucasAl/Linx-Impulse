import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="princip_form" onSubmit={handleSubmit()}>
      <label>Seu nome: </label>
      <input
        type="text"
        {...register("nome", {
          required: true,
        })}
      />
      {errors.nome && <span>Esse campo é obrigatório.</span>}
      <label>Email: </label>
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
      <label>CPF: </label>
      <input
        type="text"
        {...register("cpf", {
          required: true,
          pattern: {
            value: /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/,
            message: "CPF inválido ",
          },
        })}
      />
      {errors.cpf && <span>Esse campo é obrigatório.</span>}
      <div className="div_radio">
        {errors.genero && <span>Esse campo é obrigatório.</span>}
        <input
          className="radio-btn"
          {...register("genero", { required: true })}
          type="radio"
          name="genero"
        />
        <label>Masculino</label>
        <input
          className="radio-btn"
          {...register("genero", { required: true })}
          type="radio"
          name="genero"
        />
        <label>Feminino</label>
      </div>
      <button className="submit">Enviar</button>
    </form>
  );
};

export default Forms;
