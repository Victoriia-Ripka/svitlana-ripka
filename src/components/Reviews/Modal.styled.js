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
  padding: 35px 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;

  @media ${device.mobileTablet} {
    width: 70%;
    height: 90%;
    max-width: 500px;
    max-height: 400px;
    padding: 25px 25px;
    margin: auto;
    border: 1px solid #594d46;
    border-radius: 25px;
  }

  @media ${device.tablet} {
    max-width: 700px;
    padding: 40px 40px;
  }

  @media ${device.laptop} {
    max-width: 1280px;
    max-height: 460px;
    padding: 50px 50px;
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

  @media ${device.tablet} {
    transform: scale(1.5);

    &:hover,
    &:focus {
      transform: scale(1.9);
    }
  }
`;

export const User = styled.div``;

export const AvatarDiv = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #d9d9d9;
  object-fit: cover;

  @media ${device.mobileTablet} {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    transform: scale(1.7);
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const UserInfo = styled.div`
  margin-left: 10px;

  @media ${device.tablet} {
    margin-left: 25px;
  }
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;

export const Name = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: #001a23;
  margin-bottom: 2px;

  @media ${device.tablet} {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Country = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  margin-top: 10px;

  &::first-letter {
    text-transform: capitalize;
  }

  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    margin-top: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    font-size: 35px;
  }
`;

export const Review = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  margin-top: 8px;

  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    margin-top: 13px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 20px;
  }
`;
