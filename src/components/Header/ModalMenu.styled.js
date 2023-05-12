import styled from "styled-components";
import { device } from "../../styles/device";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #594d46;
  padding: 40px 28px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: scroll;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media ${device.tablet} {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 600px;
  @media ${device.mobileTablet} {
    width: 436px;
    margin: 0px auto;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const MenuLink = styled(NavLink)`
  font-family: "Lora";
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #ffffff;
  &.active {
    font-weight: 900;
  }
`;

export const Button = styled.button`
  width: 190px;
  height: 81px;

  background: transparent;
  border: 1px solid #ffffff;

  font-family: "Lora";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
`;
