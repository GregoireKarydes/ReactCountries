import React from 'react';
import {NavLink} from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <div className="logo">
            <NavLink exact to="/">
                <img src="./img/logo192.png" alt="logo" /></NavLink>
                <h3> React World</h3>
            </div>
        </div>
    );
};

export default Logo;