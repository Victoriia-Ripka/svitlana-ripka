import React from "react";
import { Container } from "../styles.styled";

import {
  ServicesContainer,
  Title,
  NavigationDiv,
  InfoDiv,
  NavList,
  NavItem,
  NavText,
  TextDiv,
  Text,
  Image,
} from "./Services.styled";

const Services = () => {
  return (
    <Container>
      <ServicesContainer>
        <Title>
          Допомагаю дорослим, підліткам, батькам з дітьми, сімейним парам,
          коханцям, партнерам:
        </Title>
        <NavigationDiv>
          <NavList>
            <NavItem>
              <NavText>Індивідуально</NavText>
            </NavItem>
            <NavItem>
              <NavText>Парам та сім’ям</NavText>
            </NavItem>
            <NavItem>
              <NavText>Груповий формат</NavText>
            </NavItem>
          </NavList>
        </NavigationDiv>
        <InfoDiv>
          <TextDiv>
            <Text>
              Консультування з проблем особистих відносин, професійного
              зростання та індивідуального розвитку.
            </Text>
            <Text>
              Психологічна корекція психосоматичних, невротичних, поведінкових
              та межових розладів: депресії, панічні атаки, страхи, фобії,
              тривожність, сумніви, невпевненість, агресія, пасивність,
              залежність від думки батьків, психосоматичні хвороби тощо{" "}
            </Text>
            <Text>50 хв/1500 грн. 50хв/$40</Text>
          </TextDiv>
          <Image></Image>
        </InfoDiv>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
