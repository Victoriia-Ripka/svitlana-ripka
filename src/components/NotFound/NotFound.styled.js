import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Text = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 2.9;
  color: #000000;
  margin-bottom: 5px;

  @media ${device.mobileTablet} {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
  }

  @media ${device.laptop} {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 1.33;
  }
`;
