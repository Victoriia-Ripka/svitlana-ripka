import styled, { css, keyframes } from 'styled-components';
import { device } from '../../styles/device';
import image from '../../images/svg/down-arrow-svgrepo-com.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInSecond = keyframes`
  from {
    display: none;
  }
  to {
    display: block;
  }
`;

export const Title = styled.h2`
  font-family: 'Lora';
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin-bottom: 3px;

  @media ${device.mobileTablet} {
    margin-bottom: 5px;
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

export const TextContainer = styled.div`
  width: 304px;
  margin: 0 auto 12px;

  @media ${device.mobileTablet} {
    width: 436px;
    margin: 0 auto 17px;
  }

  @media ${device.tablet} {
    width: 661px;
    margin: 0 auto 23px;
  }

  @media ${device.laptop} {
    width: 867px;
    margin: 0 auto 40px;
  }
`;

export const ContainerAnswer = styled.div`
  position: relative;
  width: 100%;
  background: rgba(175, 157, 147, 0.48);
  border-radius: 10px;
  margin: 0 0 15px 0;
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media ${device.mobileTablet} {
    width: 435px;
    padding: 8px 20px;
  }

  @media ${device.tablet} {
    width: 676px;
    margin: 0 0 20px 0;
    padding: 10px 20px;
  }

  @media ${device.laptop} {
    width: 1062px;
    margin: 0 0 40px 0;
    padding: 15px 40px;
  }
`;

export const QuestionText = styled.div`
  font-family: 'Lora';
  font-weight: 400;
  max-width: 260px;
  font-size: 11px;
  line-height: 1.3;
  color: #000000;

  @media ${device.mobileTablet} {
    max-width: 360px;
  }

  @media ${device.tablet} {
    max-width: 570px;
    font-size: 16px;
  }

  @media ${device.laptop} {
    max-width: 800px;
    font-size: 24px;
  }
`;

export const ImgContainer = styled.div`
  width: 15px;
  height: 15px;

  background-image: url(${image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  // transform: ${({ isOpen }) => (isOpen ? 'rotete(180deg)' : 'rotete(0)')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(-50%) rotate(180deg)' : ''};
  transition: all 0.5s ease;

  @media ${device.tablet} {
    width: 25px;
    height: 25px;
    right: 20px;
  }

  @media ${device.laptop} {
    width: 30px;
    height: 30px;
    right: 40px;
  }
`;

export const AnswerText = styled.p`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${fadeIn} 0.7s ease, ${fadeInSecond} 0.7s ease;
        `
      : ''};

  font-family: 'Lora';
  font-weight: 400;
  font-size: 11px;
  line-height: 1.3;
  color: #000000;
  padding: 0 12px;
  margin: 0 0 15px 0;

  @media ${device.mobileTablet} {
    width: 435px;
  }

  @media ${device.tablet} {
    width: 676px;
    font-size: 16px;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }

  @media ${device.laptop} {
    width: 1062px;
    font-size: 24px;
    margin: 0 0 40px 0;
    padding: 0 40px;
  }
`;

export const BoldText = styled.p`
  display: inline;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const NormalText = styled.p`
  display: inline;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  font-size: 11px;
  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
