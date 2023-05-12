import React from "react";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { SiViber } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FooterComponent,
  Text,
  IconContainer,
  FooterContainer,
  WorkContainer,
  SocialContainer,
  ContactsContainer,
  LabelText,
  LinkContainer,
  ImgLinkContainer
} from "./Footer.styled";
import { Container } from "../styles.styled";

const Footer = () => {
  return (
    <FooterComponent>
      <Container>
        <FooterContainer>
          <WorkContainer>
            <Text>Години роботи</Text>
            <Text>пн - пт</Text>
            <Text>з 9:00 до 21:00</Text>
          </WorkContainer>
          <SocialContainer>
            <Text>Підписуйся на мої соціальні мережі</Text>
            <IconContainer>
              <LinkContainer
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/svitlanaripka?locale=pl_PL"
              >
                <GrFacebook size={30} color="white" />
                <LabelText>Facebook</LabelText>
              </LinkContainer>
              <LinkContainer
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/psycholog_ripka/"
              >
                <BsInstagram size={30} color="white" />
                <LabelText>Instagram</LabelText>
              </LinkContainer>
            </IconContainer>
          </SocialContainer>
          <ContactsContainer>
            <Text>Контакти</Text>
            <IconContainer>
              <ImgLinkContainer
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/messages/t/1517515381886407?locale=pl_PL"
              >
                <FaFacebookMessenger size={30} color="white" />
              </ImgLinkContainer>
              <ImgLinkContainer
                target="_blank"
                rel="noreferrer"
                href="viber://add?number=380970718651"
              >
                <SiViber size={30} color="white" />
              </ImgLinkContainer>
              <ImgLinkContainer
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/qr/DUSCHTMNKN5VN1"
              >
                <IoLogoWhatsapp size={30} color="white" />
              </ImgLinkContainer>
              <ImgLinkContainer
                target="_blank"
                rel="noreferrer"
                href="https:///t.me/SvitlanaRipka"
              >
                <FaTelegramPlane size={30} color="white" />
              </ImgLinkContainer>
            </IconContainer>
          </ContactsContainer>
        </FooterContainer>
      </Container>
    </FooterComponent>
  );
};

export default Footer;
