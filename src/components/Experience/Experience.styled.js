import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    width: 436px;
    flex-direction: row;
    height: 404px;
  }

  @media ${device.tablet} {
    width: 728px;
    height: 727px;
  }

  @media ${device.laptop} {
    width: 1064px;
    height: 700px;
  }
`;

export const Image = styled.img`
  width: 220px;
  height: 329.96px;
  margin-bottom: 25px;
  object-fit: cover;

  @media ${device.mobileTablet} {
    width: 166px;
    height: 250px;
    margin-bottom: 0;
    margin-right: 20px;
  }

  @media ${device.tablet} {
    width: 292px;
    height: 438px;
  }

  @media ${device.laptop} {
    width: 400px;
    height: 599.93px;
    margin-right: 35px;
  }
`;

export const TextContainer = styled.div`
  width: 304px;
  @media ${device.mobileTablet} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 394px;
  }

  @media ${device.laptop} {
    width: 631px;
    height: 650px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-size: 15px;
  line-height: 1.3;
  font-weight: 400;
  text-align: center;
  color: #000000;
  margin-bottom: 15px;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 35px;
  }
`;

export const Time = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 2.9;
  color: #000000;
  margin-bottom: 5px;

  @media ${device.mobileTablet} {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
  }

  @media ${device.laptop} {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const Job = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 2;
  color: #000000;
  margin-bottom: 15px;

  @media ${device.mobileTablet} {
    line-height: 1.3;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 2;
    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 1.33;
    margin-bottom: 26px;
  }
`;
