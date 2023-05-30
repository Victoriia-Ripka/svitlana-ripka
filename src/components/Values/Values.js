import React from 'react';
import { Container, HidenTitle } from '../styles.styled';
import {
  ImageBackground,
  ValuesContainer,
  Image,
  TextItems,
  MainContentContainer,
  FirstText,
  TextContainer,
  LastText,
  FirstTextMobile,
} from './Values.styled';

const Values = () => {
  return (
    <Container>
      <HidenTitle>Мої цінності у роботі</HidenTitle>
      <ValuesContainer>
        <FirstTextMobile>
          У кожну консультацію вкладаю цінності абсолютної довіри, емпатії,
          розуміння та конфіденційності. Добре знаю, наскільки важливо підібрати
          індивідуальний підхід і використати саме той метод, який допоможе
          вирішити вашу проблему.
        </FirstTextMobile>
        <MainContentContainer>
          <ImageBackground>
            <Image></Image>
          </ImageBackground>
          <TextContainer>
            <FirstText>
              У кожну консультацію вкладаю цінності абсолютної довіри, емпатії,
              розуміння та конфіденційності. Добре знаю, наскільки важливо
              підібрати індивідуальний підхід і використати саме той метод, який
              допоможе вирішити вашу проблему.
            </FirstText>
            <TextItems>Якщо у вас періодично виникають думки: </TextItems>
            <ul>
              <li>
                <TextItems>• “Я так більше не можу”</TextItems>
              </li>
              <li>
                <TextItems>• “Він/вона мене не розуміє”</TextItems>
              </li>
              <li>
                <TextItems>• “Я не знаю, що робити”</TextItems>
              </li>
              <li>
                <TextItems>• “Я більше не витримую”</TextItems>
              </li>
            </ul>
            <TextItems>
              це не означає, що з вами щось не так. Це лише означає, що вам
              потрібна якісна психологічна допомога досвідченого фахівця.
            </TextItems>
          </TextContainer>
        </MainContentContainer>
        <LastText>
          Запрошую на консультації — зробіть перший крок до внутрішнього спокою,
          задоволення від життя та щасливих стосунків з собою, партнером,
          батьками чи дітьми.
        </LastText>
      </ValuesContainer>
    </Container>
  );
};

export default Values;
