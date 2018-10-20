import React from 'react';

const CharContainer = ({ data }) => {
    console.log(data)
    return(
        <div>
        <h4>{data.name} </h4>
        </div>
    );
}

export default CharContainer;