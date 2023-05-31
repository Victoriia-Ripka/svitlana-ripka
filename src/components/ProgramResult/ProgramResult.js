import React from 'react';
import { Container } from '../styles.styled';
import {
  ExtraContainer,
  TextContainer,
  InfoText,
  Title,
  ResultList,
  Item,
  Image,
  Span,
} from './ProgramResult.styled';
import family from "../../images/png/family 1.png";
import communication from "../../images/png/communication 1.png"
import maternity from "../../images/png/maternity 1.png"

const ProgramResult = () => {
  return (
    <Container>
      <ExtraContainer>
        <TextContainer>
          <InfoText>Формат програми: навчально-практичний. </InfoText>
          <InfoText>Регулярність: щотижня. </InfoText>
          <InfoText>Домашні завдання. </InfoText>
          <InfoText>
            Дієві інструменти: інструкції, пам'ятки, анкети, вправи.{' '}
          </InfoText>
        </TextContainer>
        <Title>Результат</Title>
        <ResultList>
          <Item>
            <Image src={family} alt="family"/>
            <Span>спокій в сім'ї</Span>
          </Item>
          <Item>
            <Image src={maternity} alt="maternity"/>
            <Span>дружні відносини з дитиною</Span>
          </Item>
          <Item>
            <Image src={communication} alt="communication"/>
            <Span>вміння домовлятися</Span>
          </Item>
        </ResultList>
      </ExtraContainer>
    </Container>
  );
};

export default ProgramResult;
