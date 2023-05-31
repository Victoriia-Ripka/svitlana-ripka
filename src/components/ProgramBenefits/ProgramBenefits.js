import React from 'react';
import { Container } from '../styles.styled';
import {
  ExtraContainer,
  Title,
  ListOfbenefits,
  Item,
  Tick,
  Text,
} from './ProgramBenefits.styled';
import tickSvg from '../../images/svg/tick-svgrepo-com.svg';

const ProgramBenefits = () => {
  return (
    <Container>
      <ExtraContainer>
        <Title>
          Програму розроблено спеціально для тебе, якщо ти виховуєш дитину і
          бажаєш:
        </Title>

        <ListOfbenefits>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Виправити або покращити стосунки</Text>
          </Item>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Навчитися вирішувати конфлікти</Text>
          </Item>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Знайти альтернативу покаранню</Text>
          </Item>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Навчитися розмовляти так, щоб тебе чули</Text>
          </Item>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Навчитися слухати, щоб дитина розповідала</Text>
          </Item>
          <Item>
            <Tick src={tickSvg} alt="Tick" />
            <Text>Зберігати спокій та не сваритися</Text>
          </Item>
        </ListOfbenefits>
      </ExtraContainer>
    </Container>
  );
};

export default ProgramBenefits;
