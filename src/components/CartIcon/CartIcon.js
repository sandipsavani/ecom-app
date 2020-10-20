import React from 'react';
import { connect } from 'react-redux';
import { toggelCartHidden } from './../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './Styles.scss';

const CartIcon = ({ toggelCartHidden}) => (
  <div className='cart-icon' onClick={toggelCartHidden} >
    <ShoppingIcon className='shopping-icon'  />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggelCartHidden: () => dispatch(toggelCartHidden()) 
});

export default connect (null,mapDispatchToProps )(CartIcon);