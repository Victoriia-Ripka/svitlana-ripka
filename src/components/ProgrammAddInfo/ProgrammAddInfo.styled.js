import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileTablet} {
    flex-direction: row-reverse;
    align-items: center;
    width: 440px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 685px;
  }

  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 200.04px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 150px;

  @media ${device.mobileTablet} {
    width: 186px;
    height: 180px;
    border-radius: 30px;
  }

  @media ${device.tablet} {
    width: 328px;
    height: 220px;
    border-radius: 150px;
  }

  @media ${device.laptop} {
    width: 500px;
    height: 333.4px;
  }
`;

export const TextContainer = styled.div`
  margin: 20px auto 0;
  @media ${device.mobileTablet} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 341px;
    margin: 0 10px 0;
  }

  @media ${device.laptop} {
    width: 526px;
    margin: 0 20px 0;
  }
`;

export const MainText = styled.p`
  font-family: 'Lora';
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 5px;
  color: #000000;

  @media ${device.mobileTablet} {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const Button = styled.a`
  width: 205px;
  height: 50px;
  padding: 7px;
  display: block;

  margin: 15px auto 0;

  background: rgba(89, 77, 70, 0.9);
  border-radius: 10px;

  cursor: pointer;
  background: white;
  color: #594d46;
  border: 1px solid #594d46;

  font-family: 'Lora';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;

  transition: 0.5s;

  &:hover,
  &:focus {
    background: #594d46;
    color: white;
    font-weight: 700;
    border: 1px solid transparent;
  }

  @media ${device.mobileTablet} {
    margin: 15px 0 0 0;
  }

  @media ${device.tablet} {
    width: 260px;
    height: 60px;
    font-size: 16px;
    padding: 8px;
    margin: 15px auto 0;
  }

  @media ${device.laptop} {
    width: 420px;
    height: 80px;
    font-size: 24px;
    margin: 15px 0 0 0;
  }
`;

export const AddText = styled.p`
  font-family: 'Lora';
  font-size: 14px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 3px;

  @media ${device.mobileTablet} {
    font-size: 11px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    margin-bottom: 5px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-bottom: 7px;
  }
`;
