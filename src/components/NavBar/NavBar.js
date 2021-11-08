import React from 'react';
import { NavWrapper } from './style';
import { Link } from 'react-router-dom';
import Cart from '../../assets/shopping-cart.png';

const NavBar = ({ shoppingCart }) => {
  return (
    <NavWrapper>
      <div>
        <Link to="/shopping-cart/">
          <h3>BOOK PLANET</h3>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/shopping-cart/">
          <li>HOMEPAGE</li>
        </Link>
        <Link to="/shop">
          <li>SHOP</li>
        </Link>
        <Link to="/contacts">
          <li>CONTACTS</li>
        </Link>
        <Link to="/checkout">
          <li>
            <img src={Cart} alt="cart icon" />
            {shoppingCart ? <span>{shoppingCart}</span> : null}
          </li>
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default NavBar;
