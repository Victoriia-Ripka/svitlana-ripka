import React, { useState } from 'react';
import {
  MenuContainer,
  ContentContainer,
  Button,
  MenuList,
  MenuItem,
  MenuLink,
} from './ModalMenu.styled';
import Modal from '../Modal/Modal';
import { useLocation } from 'react-router-dom';

const ModalMenu = ({ open, close }) => {
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <MenuContainer open={open}>
      <ContentContainer>
        <MenuList>
          <MenuItem>
            <MenuLink
              to="/"
              className={pathname === '/' ? 'active' : null}
              onClick={() => close(!open)}
            >
              головна
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/about"
              className={pathname === '/about' ? 'active' : null}
              onClick={() => close(!open)}
            >
              про мене
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/consultations"
              className={pathname === '/consultations' ? 'active' : null}
              onClick={() => close(!open)}
            >
              консультації
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/program-for-parents"
              className={pathname === '/program-for-parents' ? 'active' : null}
              onClick={() => close(!open)}
            >
              програма для батьків
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/articles"
              className={pathname === '/articles' ? 'active' : null}
              onClick={() => close(!open)}
            >
              статті
            </MenuLink>
          </MenuItem>
        </MenuList>
        <Button type="button" onClick={handleClick}>
          записатися на консультацію
        </Button>
        <Modal open={openModal} setOpenModal={setOpenModal} />
      </ContentContainer>
    </MenuContainer>
  );
};

export default ModalMenu;
