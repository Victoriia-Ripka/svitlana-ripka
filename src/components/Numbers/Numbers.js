import { Container } from 'components/styles.styled';
import React from 'react';
import {
  ExtraContainer,
  Title,
  List,
  Item,
  Number,
  Description,
} from './Numbers.styled';

const Numbers = () => {
  return (
    <Container>
      <ExtraContainer>
        <Title>Мій професійний досвід в цифрах</Title>
        <List>
          <Item>
            <Number>6000+</Number>
            <Description>годин навчання</Description>
          </Item>
          <Item>
            <Number>200+</Number>
            <Description>годин особистої терапії</Description>
          </Item>
          <Item>
            <Number>700+</Number>
            <Description>годин консультацій щорічно</Description>
          </Item>
          <Item>
            <Number>500+</Number>
            <Description>годин супервізій</Description>
          </Item>
          <Item>
            <Number>200+</Number>
            <Description>годин групової терапії за 2022 рік</Description>
          </Item>
          <Item>
            <Number>15+ </Number>
            <Description>країн, в яких живуть мої клієнти</Description>
          </Item>
        </List>
      </ExtraContainer>
    </Container>
  );
};

export default Numbers;
