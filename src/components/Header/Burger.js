import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../styles/device";
import ModalMenu from "./ModalMenu";

const StyledBurger = styled.div`
  width: 20px;
  height: 20px;
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 3;

  transition: all 0.5s linear;

  div {
    width: 20px;
    height: 1px;
    background-color: white;
    border-radius: 16px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media ${device.mobileTablet} {
    position: static;
  }

  @media ${device.tablet} {
    display: none;
    position: absolute;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <ModalMenu open={open} />
    </>
  );
}; 

export default Burger;
