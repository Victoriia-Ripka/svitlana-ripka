import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { device } from "../../styles/device";

export const HeaderContainer = styled.div`
  background: #594d46;
  padding: 12px 8px;
  height: 44px;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 2;

  @media ${device.mobileTablet} {
    padding: 12px 22px;
  }
  @media ${device.tablet} {
    padding: 11px 45px;
    height: 80px;
    align-iems: center;
  }
  @media ${device.laptop} {
    height: 130px;
    padding: 30px 110px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${device.mobileTablet} {
    width: 445px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
    width: 685px;
  }
  @media ${device.laptop} {
    width: 1070px;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 540px;
  @media ${device.laptop} {
    width: 670px;
  }
`;

export const LogoText = styled(Link)`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-decoration: none;
  color: #ffffff;

  @media ${device.mobileTablet} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Navigation = styled.ul`
  display: none;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    position: static;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  @media ${device.laptop} {
    margin-top: 20px;
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }

  @media ${device.laptop} {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  font-family: "Lora";
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  color: #ffffff;

  @media ${device.laptop} {
    font-size: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid white;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }

  &.active {
    font-weight: 900;
  }
`;

export const Button = styled.button`
  background: #594d46;
  border: 1px solid #ffffff;
  color: white;
  font-family: Lora;
  line-height: 1.25;
  font-size: 13px;
  width: 250px;
  height: 30px;
  cursor: pointer;

  transition: 0.5s;

  &:hover,
  &:focus {
    background: white;
    color: #594d46;
    font-weight: 700;
  }

  @media ${device.preTablet} {
    display: none;
  }

  @media ${device.tablet} {
    font-size: 13px;
    width: 130px;
    height: 40px;
  }

  @media ${device.laptop} {
    font-size: 16px;
    width: 300px;
  }
`;

export const ExtraDiv = styled.div`
  height: 40px;
  @media ${device.tablet} {
    height: 80px;
  }
  @media ${device.laptop} {
    height: 130px;
  }
`;
