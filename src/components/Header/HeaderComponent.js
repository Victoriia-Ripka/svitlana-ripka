import React from "react";
import {
  HeaderContainer,
  LogoText,
  Navigation,
  Button,
  Nav,
  HeaderContent,
  NavItem,
  MenuLink,
  ExtraDiv,
} from "./HeaderComponent.styled";
import Burger from "./Burger";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Nav>
            <LogoText to="/">Психолог Світлана Ріпка</LogoText>
            <Navigation>
              <NavItem>
                <MenuLink to="/" className={pathname === "/" ? "active" : null}>
                  головна
                </MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink
                  to="/about"
                  className={pathname === "/about" ? "active" : null}
                >
                  про мене
                </MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink
                  to="/consultations"
                  className={pathname === "/consultations" ? "active" : null}
                >
                  консультації
                </MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink
                  to="/program-for-parents"
                  className={
                    pathname === "/program-for-parents" ? "active" : null
                  }
                >
                  програма для батьків
                </MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink
                  to="/articles"
                  className={pathname === "/articles" ? "active" : null}
                >
                  статті
                </MenuLink>
              </NavItem>
            </Navigation>
          </Nav>
          <Button type="button" onClick={handleClick}>
            записатися на консультацію
          </Button>
          <Burger />
          <Modal open={openModal} close={setOpenModal} setOpenModal={setOpenModal} />
        </HeaderContent>
      </HeaderContainer>
      <ExtraDiv></ExtraDiv>
    </>
  );
};

export default HeaderComponent;
