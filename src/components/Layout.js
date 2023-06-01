import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './Header/HeaderComponent';
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        {/* fallback={<Loader />} */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
