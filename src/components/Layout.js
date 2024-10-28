import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import'../styles/Layout.css';

function Layout({ children, toggleTheme }) {
    return (
        <div className="layout-container">
            <Header toggleTheme={toggleTheme} />
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout