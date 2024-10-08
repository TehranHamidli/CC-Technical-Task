import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './layout.module.scss'
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
