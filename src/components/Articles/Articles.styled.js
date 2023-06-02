import styled from 'styled-components';
import { device } from 'styles/device';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  padding: 15px 0;

  @media ${device.mobileTablet} {
    padding: 25px 0;
  }

  @media ${device.tablet} {
    padding: 40px 0;
  }

  @media ${device.laptop} {
    padding: 50px 0;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 320px;

  @media ${device.mobileTablet} {
    width: 436px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 676px;
  }

  @media ${device.laptop} {
    width: 1104px;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;

export const ArticlesList = styled.ul`
  margin: 0 auto;
  width: 320px;

  @media ${device.mobileTablet} {
    width: 436px;
  }

  @media ${device.tablet} {
    width: 676px;
  }

  @media ${device.laptop} {
    width: 1104px;
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;

  &:nth-child(2n + 2) {
    background-color: rgba(217, 217, 217, 0.3);
  }

  @media ${device.mobileTablet} {
    height: 152px;
    padding: 30px 20px;
  }

  @media ${device.tablet} {
    height: 220px;
    padding: 20px 20px;
  }

  @media ${device.laptop} {
    height: 290px;
    padding: 30px 20px;
  }
`;

export const LinkToArticle = styled(Link)`
  @media ${device.mobileTablet} {
    margin: 0 auto;
  }

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 84.23px;

  @media ${device.mobileTablet} {
    width: 150px;
    height: 84px;
  }

  @media ${device.tablet} {
    width: 250px;
    height: 140.38px;
  }

  @media ${device.laptop} {
    width: 338.36px;
    height: 190px;
  }
`;

export const TextContainer = styled.div`
  width: 140px;
  margin-left: 12px;

  @media ${device.mobileTablet} {
    width: 221px;
    margin-left: 20px;
  }

  @media ${device.tablet} {
    width: 348px;
    margin-left: 60px;
  }

  @media ${device.laptop} {
    width: 679px;
    margin-left: 45px;
  }
`;

export const ArticleTitle = styled.h3`
  font-family: 'Lora';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  text-decoration-line: underline;
  color: #000000;

  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 35px;
  }
`;

export const PrevieText = styled.p`
  display: none;

  @media ${device.tablet} {
    display: block;
    font-family: 'Lora';
    font-size: 16px;
    line-height: 1.3;
    color: #000000;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
