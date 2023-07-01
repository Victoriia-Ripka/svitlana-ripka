import styled from 'styled-components';
import { device } from '../../styles/device';

export const GreetingContainer = styled.div`
  margin: 0 auto;

  @media ${device.mobileTablet} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 445px;
    justify-content: space-between;
    height: 420px;
  }

  @media ${device.tablet} {
    width: 685px;
    height: 500px;
  }

  @media ${device.laptop} {
    width: 1070px;
    height: 600px;
    margin: 40px auto 0;
    justify-content: center;
  }
`;

export const ImgContainer = styled.div`
  display: none;

  @media ${device.mobileTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(166, 155, 146, 0.4);
    width: 218px;
    height: 314px;
  }

  @media ${device.tablet} {
    width: 272px;
    height: 392px;
  }

  @media ${device.laptop} {
    width: 450px;
    height: 600px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 145px;
  object-fit: cover;

  @media ${device.mobileTablet} {
    width: 175px;
  }
  @media ${device.tablet} {
    width: 220px;
  }

  @media ${device.laptop} {
    width: 320px;
  }
`;

export const TextContainer = styled.div`
  max-width: 340px;
  margin: 0 auto;
  text-align: center;

  @media ${device.mobileTablet} {
    width: 206px;
    margin: 0 0 0 20px;
    position: static;
    text-align: left;
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
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #000000;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 365px;
    font-size: 20px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media ${device.laptop} {
    width: 520px;
    font-size: 24px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
