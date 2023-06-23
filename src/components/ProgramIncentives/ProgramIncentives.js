import React from 'react';
import { Container } from '../styles.styled';
import {
  Title,
  Text,
  Image,
  Link,
  IncentivesContainer,
  TextContainer,
  InfoContainer,
} from './ProgramIncentives.styled';
import img_laptop from '../../images/images/laptop/program_x1.jpg';

const ProgramIncentives = () => {
  return (
    <Container>
      <IncentivesContainer>
        <Title>Програма “Батьківська любов”</Title>
        <InfoContainer>
          <TextContainer>
            <Text>Бажаєш побудувати дружні довірливі стосунки з дитиною?</Text>
            <Text>
              Хочеш навчитися домовлятися, спілкуватися без агресії та переходу
              на підвищений тон, знизити рівень тривожності та конфліктів у
              родині, розвинути розуміння, як діяти в тій чи іншій ситуації?
            </Text>
            <Text>Реєструйся на програму</Text>
            <Link href="https://forms.gle/TbgMsXoraFGezJ7u9 " target="_blank">
              https://forms.gle/TbgMsXoraFGezJ7u9{' '}
            </Link>
          </TextContainer>
          <Image src={img_laptop} alt="family" loading="lazy"/>
        </InfoContainer>
      </IncentivesContainer>
    </Container>
  );
};

export default ProgramIncentives;
