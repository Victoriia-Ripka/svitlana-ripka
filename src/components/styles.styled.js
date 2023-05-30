import styled from 'styled-components';
import { device } from '../styles/device';

export const Container = styled.section`
  width: 100%;
  padding: 15px 8px;

  @media ${device.mobileTablet} {
    padding: 25px 22px;
  }

  @media ${device.tablet} {
    padding: 40px 46px;
  }

  @media ${device.laptop} {
    padding: 50px 108px;
  }
`;

export const AdditionalContainer = styled.div`
  width: 100%;
  padding: 15px 8px;
  margin: 0 auto;

  @media ${device.mobileTablet} {
    padding: 25px 22px;
  }

  @media ${device.tablet} {
    padding: 40px 46px;
  }

  @media ${device.laptop} {
    padding: 50px 108px;
  }
`;

export const HidenTitle = styled.h2`
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  width: 0;
  height: 0;
`;
