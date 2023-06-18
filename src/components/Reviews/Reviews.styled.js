import styled from 'styled-components';
import { device } from '../../styles/device';

export const ReviewsContainer = styled.div`
  margin: 0 auto;
  height: 390px;

  @media ${device.mobileTablet} {
    width: 436px;
    height: 300px;
  }

  @media ${device.tablet} {
    width: 685px;
    height: 330px;
  }
  @media ${device.laptop} {
    width: 1070px;
    height: 440px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  color: #594d46;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.mobileTablet} {
    text-align: left;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 25px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 60px;
  }
`;

export const Slides = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.mobileTablet} {
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const SlideContainer = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export const Slide = styled.div`
  background: #ffffff;
  border: 1px solid #594d46;
  border-radius: 25px;
  padding: 25px;
  width: 240px;
  height: 340px;
  cursor: pointer;

  @media ${device.mobileTablet} {
    width: 340px;
    height: 260px;
  }
  @media ${device.tablet} {
    width: 585px;
    height: 280px;
  }
  @media ${device.laptop} {
    width: 900px;
    height: 320px;
  }
`;

export const AvatarDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d9d9d9;
  object-fit: cover;

  @media ${device.mobileTablet} {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    transform: scale(1.7);
  }
  @media ${device.laptop} {
    transform: scale(2.5);
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const UserInfo = styled.div`
  margin-left: 12px;

  @media ${device.tablet} {
    margin-left: 25px;
  }
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;

export const Name = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #001a23;
  margin-bottom: 2px;

  @media ${device.tablet} {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Country = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  margin-top: 10px;

  &::first-letter {
    text-transform: capitalize;
  }

  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    margin-top: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Review = styled.p`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  margin-top: 5px;

  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    margin-top: 8px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const ArrowBack = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
  transform: rotate(180deg);
  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }

  @media ${device.mobileTablet} {
    transform: rotate(180deg) scale(1.3);
    &:hover,
    &:focus {
      transform: rotate(180deg) scale(1.5);
    }
  }

  @media ${device.tablet} {
    transform: rotate(180deg) scale(1.5);
    &:hover,
    &:focus {
      transform: rotate(180deg) scale(1.8);
    }
  }

  @media ${device.laptop} {
    transform: rotate(180deg) scale(2);
    &:hover,
    &:focus {
      transform: rotate(180deg) scale(2.4);
    }
  }
`;

export const ArrowNext = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }

  @media ${device.mobileTablet} {
    transform: scale(1.3);
    &:hover,
    &:focus {
      transform: scale(1.5);
    }
  }

  @media ${device.tablet} {
    transform: scale(1.5);
    &:hover,
    &:focus {
      transform: scale(1.8);
    }
  }

  @media ${device.laptop} {
    transform: scale(2);
    &:hover,
    &:focus {
      transform: scale(2.4);
    }
  }
`;
