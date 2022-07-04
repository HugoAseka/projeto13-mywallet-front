import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import { locale } from "dayjs/locale/pt-br";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { name, token } = userInfo;
  const [statements, setStatements] = useState([]);
  const now = dayjs().locale("pt-br");
  function importStatements() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(`localhost:5000/statements`, config);

    promise.then((response) => {
      setStatements(response.data);
    });
  }
  useEffect(() => {
    importStatements();
  }, []);
  let balance = 0;

  function calcBalance() {
    for (let i = 0; i < statements.length; i++) {
      if (statements[i].type === "positive") {
        console.log(statements[i]);
        balance += Number(statements[i].value);
      } else {
        balance -= Number(statements[i].value);
      }
    }
  }
  calcBalance();
  return (
    <Container>
      <Header>
        <span>Olá, {name}</span>
        <ion-icon
          onClick={() => navigate("/")}
          name="exit-outline"
        ></ion-icon>
      </Header>

      <Logs>
        {statements.length > 0 ? (
          <>
            <Column>
              {statements.map((obj) =>
                obj.type === "positive" ? (
                  <Cont>
                    <Row>
                      <Data>{obj.date}</Data>
                      {obj.description}
                    </Row>
                    <h3>R$ {obj.value}</h3>
                  </Cont>
                ) : (
                  <Cont>
                    <Row>
                      <Data>{obj.date}</Data>
                      {obj.description}
                    </Row>
                    <h2>R$ {obj.value}</h2>
                  </Cont>
                )
              )}
            </Column>
            <Cont>
              <strong>SALDO</strong>
              <>R$ {balance}</>
            </Cont>
          </>
        ) : (
          <>
            <Cont>
              <Data>
                <strong>Não há registros de entrada ou saída</strong>
              </Data>
            </Cont>
          </>
        )}
      </Logs>

      <Footer>
        <div onClick={() => navigate("/new-income")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <span>NOVA ENTRADA</span>
        </div>
        <div onClick={() => navigate("/new-expense")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <span>NOVA SAÍDA</span>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-right: 10px;
  color: #c6c6c6;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 26px;
  color: white;
`;
const Row = styled.div`
  display: flex;
`;
const Logs = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Footer = styled.footer`
  width: 100%;
  height: 16vh;
  display: flex;
  gap: 20px;

  div {
    width: 100%;
    background-color: #a328d6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: white;
    padding: 12px 10px;
    justify-content: space-between;
    font-weight: 700;

    ion-icon {
      font-size: 30px;
    }
  }
`;
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  min-width: 70vw;
  width: 95%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  h2 {
    text-align: right;
    color: #c70000;
  }
  h3 {
    text-align: right;
    color: #03ac00;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
