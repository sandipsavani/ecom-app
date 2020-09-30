import React from 'react';
import './Styles.scss';

const CustomButton = ({children, isGoogleSignIn ,...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
    {children}
    </button>
);

export default CustomButton;