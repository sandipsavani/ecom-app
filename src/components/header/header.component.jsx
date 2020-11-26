import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux' ;
import CartIcon from './../cart-icon/cart-icon.component' ;
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import './header.component.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={ () => auth.signOut()}> SIGN OUT</div> 
                :
                <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null :
      <CartDropdown />
    }
  </div>);
    
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser  ,
  hidden : selectCartHidden ,
});

export default connect(mapStateToProps)(Header);