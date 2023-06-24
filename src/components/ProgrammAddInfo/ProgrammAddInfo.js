import React from 'react';
import { Container, HidenTitle } from '../styles.styled';
import {
  ExtraContainer,
  Image,
  TextContainer,
  MainText,
  Link,
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
          <MainText>Реєструйся на програму “Головний ресурс”</MainText>
          <Link href="https://forms.gle/TbgMsXoraFGezJ7u9 " target="_blank">
            https://forms.gle/TbgMsXoraFGezJ7u9{' '}
          </Link>
          <AddText>Програма розроблена експертами:</AddText>
          <AddText>Польського Інституту Матері та </AddText>
          <AddText>Дитини ГО Крила для Родини (Україна)</AddText>
          <AddText> Школи для батьків та вихователів (Польща)</AddText>
        </TextContainer>
      </ExtraContainer>
    </Container>
  );
};

export default ProgrammAddInfo;
