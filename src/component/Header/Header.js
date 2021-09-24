import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>

            <nav className='container flex justify-between align'>
                <div>
                    <a href="">LOGO</a>
                </div>
                <div className='flex align nav'>
                    <a className='active' href="">Home</a>
                    <a href="">API</a>
                    <a href="">Forum</a>
                    <a href="">Contact Us</a>
                    <a href="">About US</a>
                </div>
            </nav>


        </div>
    );
};

export default Header;