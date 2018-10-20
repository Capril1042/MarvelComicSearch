import React from 'react';

const CharContainer = ({ data }) => {
    let pic = `${data.thumbnail.path}.${data.thumbnail.extension}`
    return(
        <div classname="CharContainer">
            <h4 classname="CharName">{data.name} </h4>
            <img classname="CharPic" src={pic} />
        </div>
    );
}

export default CharContainer;