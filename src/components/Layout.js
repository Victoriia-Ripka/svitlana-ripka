import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './Header/HeaderComponent';

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
    </div>
  );
};

export default Layout;
