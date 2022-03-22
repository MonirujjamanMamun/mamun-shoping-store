import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-section'>
                <img src={logo} alt="" />
            <div className='nave-items'>
                <ul>
                    <li><a href="/shope">Shope</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/about-us">About Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;