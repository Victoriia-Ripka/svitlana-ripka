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
  }

  @media ${device.tablet} {
    width: 676px;
  }

  @media ${device.laptop} {
    width: 1066px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 15px;
  text-align: center;

  @media ${device.mobileTablet} {
    font-size: 15px;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 35px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 112.31px;
  margin-bottom: 15px;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 250px;
    height: 140.38px;
  }

  @media ${device.tablet} {
    width: 338.36px;
    height: 190px;
  }

  @media ${device.laptop} {
    width: 338.36px;
    height: 190px;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.3;
  color: #000000;
  max-width: 380px;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    font-size: 13px;
    line-height: 1.6;
    max-width: 436px;
  }

  @media ${device.tablet} {
    max-width: 676px;
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    max-width: 900px;
  }
`;
