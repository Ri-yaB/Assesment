import React from 'react';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Product Listing</h1>
      </header>
      <main>{children}</main>
      <footer className="layout-footer">
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;
