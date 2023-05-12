import styled from "styled-components";
import { device } from "../../styles/device";

export const ServicesContainer = styled.div``;

export const Title = styled.h1`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 20px;

  color: #000000;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }
`;

export const NavigationDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0;
  // display: flex;
  // align-items: center;
  background: rgba(175, 157, 147, 0.48);

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
    width: 1062px;
    height: 97px;
  }
`;

export const InfoDiv = styled.div`
  position: relative;
`;

export const TextDiv = styled.div``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 2px 3px;
  cursor: pointer;
  color: #000000;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const NavText = styled.span`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;

  color: inherit;

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const Text = styled.p``;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  right: 0;
  width: 170px;
`;
