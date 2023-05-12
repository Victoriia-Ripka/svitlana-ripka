import React, { useEffect } from "react";
import { SiViber } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import {
  Backdrop,
  ModalDiv,
  ModalTitle,
  IconContainer,
  IconItem,
  IconLink,
  CloseButton,
} from "./Modal.styled";

const Modal = ({ open, setOpenModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const close = (open) => setOpenModal(!open);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      close(open);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close(open);
    }
  };

  const handleButton = (e) => {
    close(open);
  };

  return (
    <Backdrop onClick={handleBackdropClick} open={open}>
      <ModalDiv>
        <CloseButton onClick={handleButton}>
          <RxCrossCircled size={20} />
        </CloseButton>
        <ModalTitle>Запис на консультацію</ModalTitle>
        <IconContainer>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/messages/t/1517515381886407?locale=pl_PL"
            >
              <FaFacebookMessenger size={50} color="inherit" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="viber://add?number=380970718651"
            >
              <SiViber size={50} color="inherit" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/qr/DUSCHTMNKN5VN1"
            >
              <IoLogoWhatsapp size={50} color="inherit" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https:///t.me/SvitlanaRipka"
            >
              <FaTelegramPlane size={50} color="inherit" />
            </IconLink>
          </IconItem>
        </IconContainer>
      </ModalDiv>
    </Backdrop>
  );
};

export default Modal;
