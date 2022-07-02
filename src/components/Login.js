import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    const request = axios.post("http://localhost:5000/login", body);

    request.then((obj) => success(obj));

    request.catch((err) => {
      if (err.response.status === 401) {
        alert("Email ou senha inválidos, tente novamente.");
      }
    });
  }

  const { setUserInfo } = useContext(UserContext);

  function success(obj) {
    setUserInfo({ ...obj.data });
    navigate("/home");
  }
  return (
    <Container>
      <h1>MyWallet</h1>
      <Inputs onSubmit={signIn}>
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
        <button>Entrar</button>
        <Link to="/register">
          <span>Primeira vez? Cadastre-se!</span>
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
