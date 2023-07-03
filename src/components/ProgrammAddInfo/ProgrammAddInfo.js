import React from 'react';
import { Container, HidenTitle } from '../styles.styled';
import {
  ExtraContainer,
  Image,
  TextContainer,
  MainText,
  Button,
  AddText,
} from './ProgrammAddInfo.styled';
import laptop_img from '../../images/images/program_add_info_x1.jpg';

const ProgrammAddInfo = () => {
  return (
    <Container>
      <ExtraContainer>
        <HidenTitle>
          Додаткова інформація про програму "батьківська Любов"
        </HidenTitle>
        <Image src={laptop_img} alt="" loading="lazy" />
        <TextContainer>
          <MainText>Вартість програми: 10 000 грн.</MainText>

          <AddText>Програма розроблена експертами:</AddText>
          <AddText>Польського Інституту Матері та </AddText>
          <AddText>Дитини ГО Крила для Родини (Україна)</AddText>
          <AddText> Школи для батьків та вихователів (Польща)</AddText>
          <Button href="https://forms.gle/TbgMsXoraFGezJ7u9 " target="_blank">
            Реєструйся на програму “Головний ресурс”
          </Button>
        </TextContainer>
      </ExtraContainer>
    </Container>
  );
};

export default ProgrammAddInfo;
