import styled from "styled-components";
import { device } from "../../styles/device";

export const Backdrop = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  overflow: ${({ open }) => (open ? "" : "hidden")};
  pointer-events: ${({ open }) => (open ? "" : "none")};
  top: 0;
  left: 0;
  z-index: 50;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalDiv = styled.div`
  background: white;
  padding: 87px 48px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${device.mobileTablet} {
    width: 80%;
    height: 80%;
    max-width: 440px;
    max-height: 335px;
    padding: 40px 100px;
    margin: auto;
    border: 1px solid #594d46;
    border-radius: 25px;
  }

  @media ${device.tablet} {
    max-width: 700px;
    padding: 80px 130px;
  }

  @media ${device.laptop} {
    max-width: 900px;
    max-height: 300px;
    padding: 80px 270px;
  }
`;

export const ModalTitle = styled.h2`
  font-family: "Lora";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;

  color: #000000;
  margin-bottom: 60px;

  @media ${device.mobileTablet} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    font-size: 26px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;

export const IconContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 145px;
  height: 140px;
  justify-content: space-between;
  align-content: space-between;

  @media ${device.tablet} {
    width: 360px;
  }
`;

export const IconItem = styled.li``;

export const IconLink = styled.a`
  color: black;
  &:hover,
  &:focus {
    color: #594d46;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  transform: scale(1);
  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.5);
  }
`;
