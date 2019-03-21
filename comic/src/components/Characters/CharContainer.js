import React from 'react';

import './CharContainer.css';

//ToDo
// link ... to seperate view of character, a more detailed character page
const CharContainer = ({ data }) => {
    let pic = `${data.thumbnail.path}.${data.thumbnail.extension}`
    return(
        <div className="CharContainer">
            <div className="CharHeader"> 
                <h4 className="CharName">{data.name} </h4>
            </div>

            <img className="CharPic" src={pic} alt="marvelcharacter"/>

            <div className="CharFooter"> 
                <div className="AddChar">Add</div>
                <div className="MoreInfo">... </div>
            </div>
        </div>
    );
}

export default CharContainer;