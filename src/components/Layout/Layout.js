import React from 'react';
import { Navbar, Footer } from 'components';

import 'assets/css/main.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
