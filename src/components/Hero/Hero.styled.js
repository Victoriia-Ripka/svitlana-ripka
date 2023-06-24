import styled from 'styled-components';
import background_phone from '../../images/images/mobile/hero_x1.jpg';
import background_tablet from '../../images/images/tablet/hero_x1.jpg';
import background_laptop from '../../images/images/laptop/hero_x1.jpg';
import { device } from '../../styles/device';

export const Section = styled.div`
  width: 100%;
  height: 390px;
  position: relative;
  margin: 0 auto;
  background-image: url(${background_phone});
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;

  @media ${device.mobileTablet} {
    width: auto;
    max-width: 670px;
    height: 380px;
    background-image: url(${background_tablet});
  }

  @media ${device.tablet} {
    width: auto;
    height: 480px;
    background-image: url(${background_tablet});
    max-width: 900px;
  }

  @media ${device.laptop} {
    max-width: 1100px;
    height: 100%;
    background-image: url(${background_laptop});
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 390px;
  padding: 70px 8px;
  margin: 0 auto;

  @media ${device.mobileTablet} {
    padding: 50px 22px;
    height: 100%;
  }

  @media ${device.tablet} {
    padding: 100px 60px;
    height: 100%;
  }

  @media ${device.laptop} {
    padding: 100px 108px;
  }
`;

export const HeroContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobileTablet} {
    width: 445px;
    margin: 0 auto;
    height: 90%;
  }

  @media ${device.tablet} {
    margin: 0 0 0 70px;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    height: 370px;
  }
`;

export const TextContainer = styled.div`
  @media ${device.mobileTablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Lora';
  font-weight: 500;
  font-size: 16px;
  width: 240px;
  line-height: 1.3;
  color: #ffffff;

  @media ${device.tablet} {
    width: 490px;
    font-size: 40px;
    text-align: center;
    color: #d9d9d9;
  }

  @media ${device.laptop} {
    width: 620px;
    font-size: 50px;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  margin-top: 20px;
  width: 170px;

  color: #ffffff;

  @media ${device.tablet} {
    font-size: 20px;
    text-align: center;
    width: 330px;
  }

  @media ${device.tablet} {
    font-size: 22px;
    width: 550px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    width: 550px;
  }
`;

export const Button = styled.button`
  width: 205px;
  height: 58px;

  background: rgba(89, 77, 70, 0.9);
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;

  font-family: 'Lora';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
  transition: 0.5s;

  &:hover,
  &:focus {
    background: white;
    color: #594d46;
    font-weight: 700;
  }

  @media ${device.mobileTablet} {
    position: absolute;
    font-size: 14px;
    top: 150px;
  }

  @media ${device.tablet} {
    width: 284px;
    height: 60px;
    font-size: 16px;
    position: absolute;
    top: 235px;
  }

  @media ${device.laptop} {
    width: 400px;
    top: 310px;
  }
`;
