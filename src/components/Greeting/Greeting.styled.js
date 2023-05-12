import styled from "styled-components";
import { device } from "../../styles/device";

export const GreetingContainer = styled.div`
  display: flex;
  margin: 15px auto 0;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 420px;

  @media ${device.mobileTablet} {
    width: 445px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
    width: 685px;
    height: 560px;
  }
  @media ${device.laptop} {
    width: 1070px;
    height: 640px;
    margin: 40px auto 0;
  }
`;

export const ImgContainer = styled.div`
  width: 183px;
  height: 265px;
  background: rgba(166, 155, 146, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 218px;
    height: 314px;
  }

  @media ${device.tablet} {
    width: 272px;
    height: 392px;
  }

  @media ${device.laptop} {
    width: 450px;
    height: 637px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 147px;

  @media ${device.mobileTablet} {
    width: 175px;
  }
  @media ${device.tablet} {
    width: 220px;
  }

  @media ${device.laptop} {
    width: 360px;
  }
`;

export const TextContainer = styled.div`
  right: -10%;
  width: 185px;
  position: absolute;
  transform: translateX(-50px);
  top: 0;

  @media screen and (min-width: 380px) {
    transform: translateX(-65px);
  }

  @media screen and (min-width: 425px) {
    transform: translateX(-90px);
  }

  @media ${device.mobileTablet} {
    width: 206px;
    margin-left: 10px;
    position: static;
    transform: translateX(0);
  }

  @media ${device.tablet} {
    width: 365px;
    margin-left: 40px;
    position: static;
  }

  @media ${device.laptop} {
    width: 520px;
    margin-left: 90px;
  }
`;

export const Text = styled.div`
  width: 185px;
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 365px;
    font-size: 20px;
    line-height: 26px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media ${device.laptop} {
    width: 520px;
    font-size: 24px;
    line-height: 31px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
