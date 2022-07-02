import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NewIncome() {
  const navigate = useNavigate();
  let [amount, setAmount] = useState('');
  let [descryption, setDescryption] = useState('');
  function saveEntry(event) {
    event.preventDefault();

    navigate("/home");
  }

  return (
    <Container>
      <p>Nova entrada</p>
      <Inputs onSubmit={saveEntry}>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor"
          required
        />
        <input
          type="text"
          value={descryption}
          onChange={(e) => setDescryption(e.target.value)}
          placeholder="Descrição"
          required
        />
        <button>Entrar</button>
      </Inputs>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    font-size: 30px;
    color: white;
    font-weight: 700;
    width: inherit;
    padding-left: 30px;
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
