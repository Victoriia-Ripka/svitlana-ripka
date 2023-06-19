import styled from 'styled-components';
import { device } from 'styles/device';
import img_mobile from '../../images/images/mobile/program_x1.jpg';
import img_mobileTablet from '../../images/images/mobileTablet/program_x1.jpg';
import img_tablet from '../../images/images/tablet/program_x1.jpg';
import img_laptop from '../../images/images/laptop/program_x1.jpg';

export const IncentivesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileTablet} {
    width: 440px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 685px;
  }

  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Title = styled.h1`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;

  @media ${device.mobileTablet} {
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    font-size: 32px;
    margin-bottom: 25px;
  }

  @media ${device.laptop} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const InfoContainer = styled.div`
  @media ${device.mobileTablet} {
    display: flex;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media ${device.mobileTablet} {
    width: 208px;
    margin-bottom: 0;
    margin-right: 20px;
  }
  @media ${device.tablet} {
    width: 308px;
    margin-right: 60px;
  }
  @media ${device.laptop} {
    width: 570px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.3;
  margin: 0 auto 15px;
  max-width: 360px;
  color: #000000;

  @media ${device.mobileTablet} {
    margin: 0 0 10px;
    max-width: 208px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    margin: 0 0 15px;
    max-width: 308px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin: 0 0 20px;
    text-align: left;
    max-width: 570px;
  }
`;

export const Link = styled.a`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.3;
  display: block-inline;
  text-decoration-line: underline;

  color: rgb(89, 77, 70);
  padding: 10px 5px;
  transition: 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    display: block;
    text-align: left;
  }
`;

export const Image = styled.div`
  width: 304px;
  height: 272px;
  margin 0 auto;
  background-image: url(${img_mobile});

  @media ${device.mobileTablet} {
    background-image: url(${img_mobileTablet});
    width: 208px;
    height: 196px;
  }

  @media ${device.tablet} {
    background-image: url(${img_tablet});
    width: 290px;
    height: 290px;
  }
  @media ${device.laptop} {
    background-image: url(${img_laptop});
    width: 450px;
    height: 450px;
  }
`;
