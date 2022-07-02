import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordconfirmation, setPasswordconfirmation] = useState("");
  const navigate = useNavigate();

  function register(event) {

    event.preventDefault();

    const userData = {
        name,
        email,
        password
    }

    console.log(userData);
    const request = axios.post('http://localhost:5000/signup', userData);

    request.then(() => {
        navigate('/');
    });

    request.catch((err) => {
        if (err.response.status === 409) {
            alert("Usuário já existente. Tente novamente!");
        }
    });
};
  return (
    <Container>
      <h1>MyWallet</h1>
      <Inputs onSubmit={register}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          type="password"
          value={passwordconfirmation}
          onChange={(e) => setPasswordconfirmation(e.target.value)}
          placeholder="Confirme a senha"
          required
        />

        <button>Cadastrar</button>
        <Link to="/">
          <span>Já tem uma conta? Entre agora!</span>
        </Link>
      </Inputs>
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
  width: 100%;
  max-width: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-family: "Saira Stencil One";
    color: #ffffff;
  }
`;
const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 10px;
  input {
    height: 50px;
    border-radius: 6px;
    width: 100%;
    border: 1px ridge #d4d4d4;
    padding-left: 20px;
    font-size: 20px;
  }
  button {
    width: 100%;
    height: 50px;
    border-radius: 6px;
    font-size: 20px;
    background-color: #a328d6;
    margin: 30px 0 20px 0;
    /* opacity: ${({ loading }) => (loading ? 0.7 : 1)}; */
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-top: 20px;
    color: white;
    text-align: center;
  }
`;
