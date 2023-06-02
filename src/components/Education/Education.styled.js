import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 275px;

  @media ${device.mobileTablet} {
    width: 389px;
  }

  @media ${device.tablet} {
    width: 611px;
  }

  @media ${device.laptop} {
    width: 780px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 700px;
  background-color: #594d46;
  position: absolute;
  top: 0;
  left: 10px;

  @media ${device.tablet} {
    height: 756px;
  }

  @media ${device.laptop} {
    height: 756px;
    top: 80px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 32px;
    margin-bottom: 55px;
  }
`;

export const List = styled.ul`
  width: 275px;
  margin-left: 35px;
  margin-bottom: -30px;

  @media ${device.mobileTablet} {
    width: 355px;
    margin-left: 55px;
    margin-bottom: -35px;
  }

  @media ${device.tablet} {
    width: 611px;
    margin-bottom: -30px;
  }

  @media ${device.laptop} {
    width: 780px;
    margin-left: 170px;
  }
`;

export const Item = styled.li`
  margin-bottom: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #594d46;
    border-radius: 50%;

    top: 50%;
    transform: translateY(-50%);
    left: -12px;
  }

  @media ${device.mobileTablet} {
    margin-bottom: 35px;

    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: -39px;
    }
  }

  @media ${device.tablet} {
    margin-bottom: 30px;

    &::before {
      width: 12px;
      height: 12px;
      top: 50%;
      transform: translateY(-50%);
      left: -23px;
    }
  }

  @media ${device.laptop} {
    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: -80px;
    }
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;
