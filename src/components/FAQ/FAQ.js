import React, { useState } from 'react';
import { Container, HidenTitle } from '../styles.styled';
import { QuestionList } from './FAQ.styled';
import QuestionComponent from '../QuestionComponent/QuestionComponent';
import FAQArray from '../../data/FAQ.json';

const QandA = () => {
  const [isOpen, setIsOpen] = useState([
    { open: true },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
  ]);

  const toggleAnswer = index => {
    setIsOpen(
      isOpen.map((item, ind) => {
        if (ind === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <Container>
      <HidenTitle>Питання і відповіді</HidenTitle>
      <QuestionList>
        {FAQArray.map((item, index) => (
          <li key={index}>
            <QuestionComponent
              item={item}
              index={index}
              isOpen={isOpen}
              toggleAnswer={toggleAnswer}
            />
          </li>
        ))}
      </QuestionList>
    </Container>
  );
};

export default QandA;
