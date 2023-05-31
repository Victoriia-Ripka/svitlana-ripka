import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 430px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 576px;
  }

  @media ${device.laptop} {
    width: 1064px;
  }
`;

export const TextContainer = styled.div`
  width: 304px;
  margin: 0 auto 30px;

  @media ${device.mobileTablet} {
  }

  @media ${device.tablet} {
    width: 576px;
    margin: 0 auto 40px;
  }

  @media ${device.laptop} {
    width: 715px;
    margin: 0 auto 50px;
  }
`;

export const InfoText = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 5px;

  @media ${device.mobileTablet} {
    text-align-last: center;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 7px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 24px;
    margin-bottom: 35px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 45px;
  }
`;

export const ResultList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;

  @media ${device.mobileTablet} {
    width: 430px;

    @media ${device.tablet} {
      width: 570px;
    }

    @media ${device.laptop} {
      width: 1064px;
    }
  }
`;

export const Item = styled.li`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 120px;
  }

  @media ${device.tablet} {
    width: 180px;
  }

  @media ${device.laptop} {
    width: 340px;
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;

  @media ${device.mobileTablet} {
    margin-bottom: 15px;
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    width: 70px;
    height: 70px;
  }
`;

export const Span = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  @media ${device.mobileTablet} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 15px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
