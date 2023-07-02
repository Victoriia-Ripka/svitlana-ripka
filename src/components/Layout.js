import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './Header/HeaderComponent';
import Footer from './Footer/Footer';
import Loading from '../components/Loading/Loading';
import { Body } from './styles.styled';

const Layout = () => {
  return (
    <Body>
      <HeaderComponent />
      <div>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </Body>
  );
};

export default Layout;
