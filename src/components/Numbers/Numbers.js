import { Container } from 'components/styles.styled';
import React, { useState, useEffect } from 'react';
import {
  ExtraContainer,
  Title,
  List,
  Item,
  Number,
  Description,
} from './Numbers.styled';

const Numbers = () => {
  const [expNumbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const targetNumbers = [6000, 200, 700, 500, 200, 15];
  const duration = 6000;

  useEffect(() => {
    const intervals = targetNumbers.map((targetNumber, index) => {
      const increment = Math.ceil(targetNumber / (duration / 50));

      return setInterval(() => {
        setNumbers(prevNumbers => {
          if (prevNumbers[index] + increment >= targetNumber) {
            clearInterval(intervals[index]);

            const updatedNumbers = [...prevNumbers];
            updatedNumbers[index] = targetNumber;

            return updatedNumbers;
          } else {
            const updatedNumbers = [...prevNumbers];
            updatedNumbers[index] = prevNumbers[index] + increment;

            return updatedNumbers;
          }
        });
      }, 50);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ExtraContainer>
        <Title>Мій професійний досвід в цифрах</Title>
        <List>
          <Item>
            <Number>{expNumbers[0]}+</Number>
            <Description>годин навчання</Description>
          </Item>
          <Item>
            <Number>{expNumbers[1]}+</Number>
            <Description>годин особистої терапії</Description>
          </Item>
          <Item>
            <Number>{expNumbers[2]}+</Number>
            <Description>годин консультацій щорічно</Description>
          </Item>
          <Item>
            <Number>{expNumbers[3]}+</Number>
            <Description>годин супервізій</Description>
          </Item>
          <Item>
            <Number>{expNumbers[4]}+</Number>
            <Description>годин групової терапії за 2022 рік</Description>
          </Item>
          <Item>
            <Number>{expNumbers[5]}+ </Number>
            <Description>країн, в яких живуть мої клієнти</Description>
          </Item>
        </List>
      </ExtraContainer>
    </Container>
  );
};

export default Numbers;
