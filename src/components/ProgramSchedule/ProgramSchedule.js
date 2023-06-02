import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  TextContainer,
  Title,
  ContainerAnswer,
  QuestionText,
  ImgContainer,
  AnswerText,
  BoldText,
  NormalText,
} from './ProgramSchedule.styled';
import { ExtraContainer } from 'components/ProgramBenefits/ProgramBenefits.styled';
import scheduleText from '../../data/schedule.json';

const ProgramSchedule = () => {
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
        <AnswerText isOpen={open}>
          {scheduleText.map((item, index) => (
            <p key={index}>
              <BoldText>
                Тема {index + 1} {item.title} :
              </BoldText>{' '}
              <NormalText>{item.description}</NormalText>
            </p>
          ))}
        </AnswerText>
      </ExtraContainer>
    </Container>
  );
};

export default ProgramSchedule;
