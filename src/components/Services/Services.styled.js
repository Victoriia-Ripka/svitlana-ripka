import styled from 'styled-components';
import { device } from '../../styles/device';
import image_mobile from '../../images/images/mobile/services_x1.jpg';
import image_mobileTablet from '../../images/images/mobileTablet/services_x1.jpg';
import image_tablet from "../../images/images/tablet/services_x1.jpg";
import image_laptop from "../../images/images/laptop/services_x1.jpg";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;

  @media ${device.mobileTablet} {
    font-size: 15px;
    width: 354px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    width: 676px;
    margin-bottom: 30px;
  }

  @media ${device.laptop} {
    font-size: 36px;
    width: 903px;
    margin-bottom: 40px;
  }
`;

export const NavigationDiv = styled.div`
  width: 100%;
  height: 47px;
  padding: 10px 0;
  background: rgba(175, 157, 147, 0.48);

  @media ${device.mobileTablet} {
    width: 436px;
    height: 50px;
  }

  @media ${device.tablet} {
    width: 676px;
    height: 60px;
    display: flex;
  }

  @media ${device.laptop} {
    width: 1062px;
    height: 97px;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: #ffffff;
  transition: 0.5s;

  &:hover,
  &:focus {
    color: #000000;
  }

  @media ${device.tablet} {
    padding: 0 5px;
  }

  @media ${device.laptop} {
  }
`;

export const NavText = styled.span`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: inherit;

  @media ${device.mobileTablet} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const InfoDiv = styled.div`
  margin-top: 10px;
  display flex;

  @media ${device.mobileTablet} {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    margin-top: 34px;
  }

  @media ${device.laptop} {
    position: relative;
    margin-top: 30px;
    width: 1062px;
    height: 460px;
  }
`;

export const TextDiv = styled.div`
  width: 60%;
  margin-right: 6px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileTablet} {
    width: 270px;
    margin-right: 16px;
    height: 191px;
  }

  @media ${device.tablet} {
    width: 330px;
    margin-right: 25px;
    height: 310px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    width: 580px;
    margin-right: 0;
    height: 444px;
    position: absolute;
    top: 20px;
    left: 0;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 11px;
  line-height: 1.3;
  text-align: center;

  color: #000000;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${device.mobileTablet} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    &:not(:last-child) {
      margin-bottom: 37px;
    }
  }
`;

export const Image = styled.div`
  width: 115px;
  height: 230px;
  background-image: url(${image_mobile});
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;

  @media ${device.mobileTablet} {
    background-image: url(${image_mobileTablet});
    width: 150px;
    height: 191px;
  }

  @media ${device.tablet} {
    background-image: url(${image_tablet});
    width: 310px;
    height: 289px;
  }

  @media ${device.laptop} {
    position: absolute;
    top: 20px;
    right: 0;
    background-image: url(${image_laptop});
    width: 477px;
    height: 444px;
  }
`;
