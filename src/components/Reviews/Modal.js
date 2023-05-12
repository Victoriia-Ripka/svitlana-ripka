import React, { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import {
  Backdrop,
  ModalDiv,
  CloseButton,
  User,
  Info,
  AvatarDiv,
  UserInfo,
  Name,
  Country,
  Text,
  Review,
} from "./Modal.styled.js";
import ReviewsArray from "../../data/reviews.json";
import { IconContext } from "react-icons";
import { RxAvatar } from "react-icons/rx";

export const Modal = ({ index, open, setOpenModal }) => {
  const client = ReviewsArray[index];

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
        <User>
          <Info>
            <AvatarDiv>
              <IconContext.Provider value={{ size: "auto" }}>
                <RxAvatar />
              </IconContext.Provider>
            </AvatarDiv>
            <UserInfo>
              <Name>
                {client.name} {client.age}
              </Name>
              <Country>{client.country} </Country>
            </UserInfo>
          </Info>
          <Text>{client.type}</Text>
          <Review>{client.review}</Review>
        </User>
      </ModalDiv>
    </Backdrop>
  );
};
