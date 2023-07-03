import styled from 'styled-components';
import { device } from '../../styles/device';

export const FooterComponent = styled.footer`
  margin-top: auto;
  width: 100vw;
  height: 100%;
  background-color: #594d46;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px 0;

  @media ${device.mobileTablet} {
    width: 436px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 676px;
  }

  @media ${device.laptop} {
    width: 1064px;
  }
`;

export const WorkContainer = styled.div`
  width: 110px;
  @media ${device.tablet} {
    width: 150px;
  }

  @media ${device.laptop} {
    width: 180px;
  }
`;

export const SocialContainer = styled.div`
  width: 120px;
  @media ${device.tablet} {
    width: 190px;
  }

  @media ${device.laptop} {
    width: 420px;
  }
`;

export const ContactsContainer = styled.div`
  width: 340px;
  margin: 20px auto 0px;
  @media ${device.mobileTablet} {
    width: 240px;
    margin: 25px auto 0px;
  }

  @media ${device.tablet} {
    margin: 0px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
`;

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;

  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: #ffffff;
  margin-bottom: 10px;

  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const TextLast = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: #ffffff;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const ImgLinkContainer = styled.a`
  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const LabelText = styled.span`
  display: none;
  position: absolute;
  @media ${device.laptop} {
    display: inline-block;
    position: static;
    font-family: 'Lora';
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
    margin-left: 5px;
  }
`;
