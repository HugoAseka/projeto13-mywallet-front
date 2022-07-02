import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <span>Olá, Fulano</span>
        <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <Logs> Não há registros de entrada ou saída</Logs>
      <Footer>
        <div onClick={() => navigate("/new-income")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <span>NOVA ENTRADA</span>
        </div>
        <div onClick={() => navigate("/new-outcome")}>
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
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 26px;
  color: white;
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
