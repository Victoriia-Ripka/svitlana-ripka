import styled from 'styled-components';
import { device } from '../../styles/device';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ReviewsContainer = styled.div`
  margin: 0 auto;
  height: 390px;

  @media ${device.mobileTablet} {
    width: 436px;
    height: 298px;
  }

  @media ${device.tablet} {
    width: 685px;
    height: 350px;
  }
  @media ${device.laptop} {
    width: 1070px;
    height: 455px;
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

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const Slide = styled(SwiperSlide)`
  background: #ffffff;
  border: 2px solid #594d46;
  border-radius: 25px;
  padding: 20px 45px;
  width: 240px;
  height: 360px;
  cursor: pointer;

  @media ${device.mobileTablet} {
    width: 340px;
    height: 270px;
  }

  @media ${device.tablet} {
    width: 585px;
    height: 300px;
    padding: 20px 45px;
  }

  @media ${device.laptop} {
    width: 900px;
    height: 300px;
    padding: 45px;
  }
`;

export const AvatarDiv = styled.div`
  width: 40px;
  height: 40px;

  @media ${device.mobileTablet} {
    width: 40px;
    height: 40px;
  }
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
  @media ${device.laptop} {
    width: 80px;
    height: 80px;
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
    margin-left: 30px;
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
  font-weight: 500;
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

export const StyledSwiper = styled(Swiper)`
  height: 350px;
  @media ${device.mobileTablet} {
    height: 260px;
  }

  @media ${device.tablet} {
    height: 300px;
  }

  @media ${device.laptop} {
    height: 350px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(89, 77, 70);
  }

  .swiper-pagination-bullet {
    mergin: 50px;
    background-color: rgb(89, 77, 70);
  }
`;
