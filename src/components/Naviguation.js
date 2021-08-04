import React from 'react';
import {NavLink} from 'react-router-dom';

const Naviguation = () => {
    return (
        <div>
            <div className="naviguation">
                <NavLink exact to="/" activeClassName="nav-active">
                    Accueil
                </NavLink>

                <NavLink exact to="/About" activeClassName="nav-active">
                    A propos
                </NavLink>

            </div>
        </div>
    );
};

export default Naviguation;