import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 440px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 700px;
  }

  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
  max-width: 314px;

  @media ${device.mobileTablet} {
    margin-bottom: 25px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    max-width: 546px;
  }

  @media ${device.laptop} {
    max-width: 1070px;
    margin-bottom: 35px;
  }
`;

export const ListOfbenefits = styled.ul`
  width: 270px;
  margin: 0 auto;

  @media ${device.mobileTablet} {
    width: 440px;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }

  @media ${device.tablet} {
    width: 700px;
  }

  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 25px;
  }
`;

export const Tick = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 15px;

  @media ${device.mobileTablet} {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  @media ${device.tablet} {
    width: 25px;
    height: 25px;
  }

  @media ${device.laptop} {
    margin-right: 20px;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;
