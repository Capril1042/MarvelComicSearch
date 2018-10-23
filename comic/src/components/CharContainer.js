import React from 'react';

const CharContainer = ({ data }) => {
    let pic = `${data.thumbnail.path}.${data.thumbnail.extension}`
    return(
        <div className="CharContainer">
            <h4 className="CharName">{data.name} </h4>
            <img className="CharPic" src={pic} alt="marvelcharacter"/>
        </div>
    );
}

export default CharContainer;