import styled from 'styled-components';
import { device } from '../../styles/device';

export const AimContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  @media ${device.mobileTablet} {
    width: 411px;
  }
  @media ${device.tablet} {
    width: 642px;
    height: 590px;
  }
  @media ${device.laptop} {
    width: 1050px;
    height: 777px;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 290px;

  @media ${device.mobileTablet} {
    justify-content: space-between;
  }
  @media ${device.tablet} {
    height: 470px;
  }
  @media ${device.laptop} {
    height: 637px;
  }
`;

export const TextContainer = styled.div`
  width: 140px;
  position: absolute;
  top: 11px;
  left: 5px;

  @media screen and (min-width: 380px) {
    transform: translateX(10px);
  }

  @media screen and (min-width: 425px) {
    transform: translateX(40px);
  }

  @media ${device.mobileTablet} {
    width: 155px;
    position: static;
  }
  @media ${device.tablet} {
    width: 270px;
  }
  @media ${device.laptop} {
    width: 450px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;

  color: #594d46;

  @media ${device.tablet} {
    font-size: 40px;
    margin-bottom: 40px;
    width: 270px;
  }
  @media ${device.laptop} {
    font-size: 48px;
    margin: 0 auto 40px;
  }
`;

export const List = styled.ul``;

export const Aims = styled.li`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    width: 270px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${device.laptop} {
    font-size: 20px;
    width: 450px;
  }
`;

export const ImgContainer = styled.div`
  width: 213px;
  height: 288px;
  background: rgba(166, 155, 146, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 210px;
    height: 290px;
  }

  @media ${device.tablet} {
    width: 290px;
    height: 380px;
  }

  @media ${device.laptop} {
    width: 450px;
    height: 637px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 171px;

  @media ${device.mobileTablet} {
    width: 160px;
  }
  @media ${device.tablet} {
    width: 233px;
    height: 323px;
  }

  @media ${device.laptop} {
    width: 362px;
    height: 543px;
  }
`;

export const Text = styled.p`
  margin: 20px auto 0;
  font-family: 'Lora';
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  width: 304px;

  color: #000000;

  @media ${device.mobileTablet} {
    width: 340px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    width: 636px;
    margin: 50px auto 0;
  }

  @media ${device.laptop} {
    font-size: 24px;
    width: 746px;
    margin: 60px auto 0;
  }
`;
