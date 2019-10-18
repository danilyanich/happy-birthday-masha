import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCurrentTask, setCurrentTask, DATA } from '~/utils/data';

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: url("/bg4.png"), linear-gradient(to bottom, #8a2387, #e94057, #f27121);

  display: flex;
  justify-content: stretch;
  align-items: stretch;

  padding: 100px 20px;
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

  overflow-y: hidden;
  overflow-t: scroll;
`;

const Group = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;

  margin-right: -10px;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-right: 10px;

  color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.8);

  padding: 10px 20px;
  background: transparent;

  flex-grow: 1;
  flex-shrink: 0;
`;

const Input = styled.input`
  color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.8);

  padding: 20px;
  background: transparent;

  width: 100%;
`;

const Form = styled.form`
  margin-top: auto;
`;

function TaskInput({
  onAnswer,
}) {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    onAnswer(value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Ваш ответ..."
        onChange={onChange}
        value={value}
      />
    </Form>
  );
}

function Game({
  navigate,
}) {
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    const loadedTask = getCurrentTask();

    setActiveTask(loadedTask);
  }, []);

  function onAnswer(answer) {
    if (activeTask.answer.toLowerCase() === answer.toLowerCase()) {
      const index = DATA.findIndex(task => task.id === activeTask.id);

      if (DATA.length > index) {
        const nextTask = DATA[index + 1];

        setCurrentTask(nextTask.id);
        setActiveTask(nextTask);
      } else {
        navigate('End');
      }
    } else {
      window.alert(activeTask.error);
    }
  }

  return (
    <Main>
      <Card>
        {activeTask && (
          <>
            {activeTask.question}
            {activeTask.type === 'buttons' && (
              <Group>
                {activeTask.buttons.map(buttonText => (
                  <Button onClick={() => onAnswer(buttonText)}>
                    {buttonText}
                  </Button>
                ))}
              </Group>
            )}
            {activeTask.type === 'input' && (
              <TaskInput onAnswer={onAnswer} />
            )}
          </>
        )}
      </Card>
    </Main>
  );
}

export default Game;
