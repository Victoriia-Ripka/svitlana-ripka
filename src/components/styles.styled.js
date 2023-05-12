import styled from "styled-components";
import { device } from "../styles/device";

export const Container = styled.section`
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
