import styled from 'styled-components';
import { device } from 'styles/device';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    margin: 0 auto;
  }

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }
`;