import React from 'react';

import InfoButton from './InfoButton';
import './Header.css';

// TO_DO 
// Replace info div with icon
// icon/ info button takes user to 
// screen which explains how the Application works


const Header= () => {
return (
    <div className="Header">
        <div className="Title">
            Marvel Comic Search
        </div>
    <div className="Info"> 
     <InfoButton/>
    </div>
    </div>
)
}
export default Header;