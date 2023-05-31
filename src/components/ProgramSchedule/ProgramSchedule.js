import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  TextContainer,
  Title,
  ContainerAnswer,
  QuestionText,
  ImgContainer,
  AnswerText,
} from './ProgramSchedule.styled';
import { ExtraContainer } from 'components/ProgramBenefits/ProgramBenefits.styled';

const ProgramSchedule = () => {
  const answer = 'hello';
  const [open, setOpen] = useState(false);

  const toggleSchedule = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <ExtraContainer>
        <TextContainer>
          <Title>10 тижнів - 10 тем </Title>
          <Title>
            послідовний план покращення стосунків, який виконаємо разом
          </Title>
        </TextContainer>
        <ContainerAnswer onClick={() => toggleSchedule()}>
          <QuestionText>Теми занять</QuestionText>
          <ImgContainer></ImgContainer>
        </ContainerAnswer>
        <AnswerText isOpen={open}>{answer}</AnswerText>
      </ExtraContainer>
    </Container>
  );
};

export default ProgramSchedule;
