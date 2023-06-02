import React from 'react';
import { Container } from '../styles.styled';
import { ExtraContainer, Text } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <ExtraContainer>
        <Text>Вибачте, не було знайдено сторінку з цією url-адресою. </Text>
      </ExtraContainer>
    </Container>
  );
};

export default NotFound;
