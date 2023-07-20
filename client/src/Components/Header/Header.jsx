import React from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import prod from '../../assets/adidas.png';
import { useNavigate } from 'react-router';
import './Header.css';

const Header = () => {
    
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-icon'>
                <img src={prod} alt="header-image" onClick={() => navigate("/")} />
            </div>
            <div className='header-title'>
                <span><a href="/">Home</a></span>
                <span><a href="/about">About</a></span>
                <span><a href="/category">Categories</a></span>
                <select name="" id="">
                    <option value="1"></option>
                </select>
                <span><a href="/contact">Contact</a></span>
            </div>
            <div className='header-cart'>
                <MdOutlineFavoriteBorder />
                <AiOutlineShoppingCart onClick={() => navigate('/cart')} />
            </div>
        </div>
    )
}

export default Header