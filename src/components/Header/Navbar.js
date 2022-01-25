import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.CartReducer);
    return (
        <div className='header'>
            <div className='header1'>Redux-cart</div>
            <Link to="/cart">
                <div className='header2'>
                    cart
                    <div className='counter'>{cart.length}</div>
                </div>
            </Link>

        </div>
    );
}

export default Navbar;
