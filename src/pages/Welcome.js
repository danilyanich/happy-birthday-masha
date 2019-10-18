import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: url("/bg4.png"), linear-gradient(0deg, rgba(73,73,223,1) 0%, rgba(0,212,255,1) 100%);

  display: flex;
  justify-content: stretch;
  align-items: stretch;

  padding: 100px 40px;
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 20px;

  background: rgba(255, 255, 255, 60%);

  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.40),
    0 4px 4px 0 rgba(0, 0, 0, 0.20),
    0 8px 8px 0 rgba(0, 0, 0, 0.10),
    0 16px 16px 0 rgba(0, 0, 0, 0.05);

  color: rgba(0, 0, 0, 0.8);
  font-size: 25px;
  font-weight: 500;
`;

const Button = styled.button`
  margin-top: auto;

  color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.8);

  padding: 20px;
  background: transparent;
`;


function Welcome({
  navigate,
}) {
  return (
    <Main>
      <Card>
        Привет, Маша. Я КотоБот 🐈. Поздравляю тебя с днем Рождения! Постарайся отвечать на мои вопросы правильно и возможно ты что-нибудь найдешь.
        <Button onClick={() => navigate('Game')}>
          Погнали!
        </Button>
      </Card>
    </Main>
  );
}

export default Welcome;
