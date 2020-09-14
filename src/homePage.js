import React from 'react';
import './homepage.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Hate</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">jacket</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Sneaker</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Women</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Men</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>            
    </div>
);

export default HomePage;