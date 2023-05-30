import React from 'react';
import {
  Container,
  QuestionText,
  AnswerText,
  ImgContainer,
} from './QuestionComponent.styled';

const QuestionComponent = ({ item, index, isOpen, toggleAnswer }) => {
  return (
    <>
      <Container onClick={() => toggleAnswer(index)}>
        <QuestionText>{item.question}</QuestionText>
        <ImgContainer></ImgContainer>
      </Container>
      <AnswerText isOpen={isOpen[index]['open']}>{item.answer}</AnswerText>
    </>
  );
};

export default QuestionComponent;
