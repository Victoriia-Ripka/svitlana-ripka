import React from "react";
import { Container } from "../styles.styled";
import image from "../../images/png/x1/goal_x1.png";
import {
  AimContainer,
  TextContainer,
  Title,
  List,
  Aims,
  Text,
  Img,
  ImgContainer,
  ExtraContainer,
} from "./Aim.styled";

const Aim = () => {
  return (
    <div style={{ background: "rgba(217, 217, 217, 0.2)" }}>
      <Container>
        <AimContainer>
          <ExtraContainer>
            <TextContainer>
              <Title>Моя мета</Title>
              <List>
                <Aims>відновити ваш психологічний стан</Aims>
                <Aims>
                  підтримати вас та допомогти подолати кризовий період без
                  негативних наслідків
                </Aims>
                <Aims>
                  вирішити проблему якомога комфортним для вас способом
                </Aims>
                <Aims>
                  допомогти знайти ресурси та розуміння можливостей для
                  майбутнього життя
                </Aims>
              </List>
            </TextContainer>
            <ImgContainer>
              <Img src={image} alt="white flowers and notes" loading="lazy" />
            </ImgContainer>
          </ExtraContainer>
          <Text>
            Загальною метою є збереження та покращення психічного здоров'я
            українців.
          </Text>
        </AimContainer>
      </Container>
    </div>
  );
};

export default Aim;
