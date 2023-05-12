import React, { useState } from "react";
import {
  Section,
  TextContainer,
  Title,
  Text,
  Button,
  HeroContainer,
  Container,
} from "./Hero.styled";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Section>
        <Container>
          <HeroContainer>
            <TextContainer>
              <Title>Психологічна допомога у складні періоди життя</Title>
              <Text>
                Зробіть перший крок до внутрішнього спокою, задоволення від
                життя та щасливих стосунків
              </Text>
            </TextContainer>
            <Button type="button" onClick={handleClick}>
              записатися на онлайн консультацію
            </Button>
            <Modal open={openModal} setOpenModal={setOpenModal} />
          </HeroContainer>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
