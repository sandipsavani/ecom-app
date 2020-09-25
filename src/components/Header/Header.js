import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'; 
import './Styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="logo-container">
                SHOP
            </Link>
            <Link to="/" className="logo-container">
                CONTACT
            </Link>
        
        </div>
    </div>);

export default Header;