import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  TextContainer,
  Title,
  ContainerAnswer,
  QuestionText,
  ImgContainer,
  AnswerContiner,
  BoldText,
  NormalText,
} from './ProgramSchedule.styled';
import { ExtraContainer } from 'components/ProgramBenefits/ProgramBenefits.styled';
import scheduleText from '../../data/schedule.json';
import image from '../../images/svg/down-arrow-svgrepo-com.svg';

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
          <ImgContainer src={image} alt="cross" isOpen={open} />
        </ContainerAnswer>
        <AnswerContiner isOpen={open}>
          {scheduleText.map((item, index) => (
            <div key={index}>
              <BoldText>
                Тема {index + 1} {item.title} :
              </BoldText>{' '}
              <NormalText>{item.description}</NormalText>
            </div>
          ))}
        </AnswerContiner>
      </ExtraContainer>
    </Container>
  );
};

export default ProgramSchedule;
