import React from 'react';
import {
  Container,
  QuestionText,
  AnswerText,
  ImgContainer,
} from './QuestionComponent.styled';
import image from '../../images/svg/down-arrow-svgrepo-com.svg';

const QuestionComponent = ({ item, index, isOpen, toggleAnswer }) => {
  return (
    <>
      <Container onClick={() => toggleAnswer(index)}>
        <QuestionText>{item.question}</QuestionText>
        <ImgContainer src={image} alt="cross" isOpen={isOpen[index]['open']} />
      </Container>
      <AnswerText isOpen={isOpen[index]['open']}>{item.answer}</AnswerText>
    </>
  );
};

export default QuestionComponent;
