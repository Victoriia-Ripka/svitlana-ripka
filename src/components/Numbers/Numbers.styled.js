import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    width: 434px;
  }

  @media ${device.tablet} {
    width: 677px;
    height: 350px;
    justify-content: start;
  }

  @media ${device.laptop} {
    width: 848px;
    height: 430px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 700;
  font-size: 15px;
  line-height: 3;
  text-align: center;
  color: #090914;
  margin-bottom: 25px;

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 45px;
  }

  @media ${device.laptop} {
    font-size: 36px;
    line-height: 1.28;
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  width: 290px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  margin-bottom: -30px;

  @media ${device.mobileTablet} {
    margin: 0 auto;
    width: 434px;
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
    margin-bottom: -25px;
  }

  @media ${device.tablet} {
    width: 676px;
    margin-bottom: -70px;
    height: 250px;
    position: relative;

    &::before {
      content: '';
      width: 677px;
      height: 2px;
      background-color: #e4e4e7;
      width: 848px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${device.laptop} {
    width: 742px;
    margin-bottom: -85px;
    height: 313px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media ${device.mobileTablet} {
    margin-bottom: 25px;
    height: 63px;
  }

  @media ${device.tablet} {
    margin-bottom: 70x;
    height: 98.24px;
  }

  @media ${device.laptop} {
    margin-bottom: 85px;
    height: 105.88px;
    width: 198.11px;
  }
`;

export const Number = styled.span`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -1px;
  color: #090914;
  margin-buttom: 10px;

  @media ${device.mobileTablet} {
    margin-buttom: 15px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.55;
    letter-spacing: -2px;
  }

  @media ${device.laptop} {
    margin-buttom: 10px;
  }
`;

export const Description = styled.p`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
  color: #52525b;

  @media ${device.mobileTablet} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;
