import React from 'react';


//To Do 
// functionality for search comic- using marvel api
const CharSelector = () => {
    
    return(
        <div className="CharSelector">
            <p> choosen characters will apper here</p>
           <div className="SelectorButtons">
            <div className="SearchComics"> search comics button 
            </div>
            <div className="ClearCharacters"> reset button</div>
            </div>
            <div className="CharSelectorBox">
                CharSelector
            </div>
            <div className="CharSelectorBox">
                CharSelector
            </div>
            <div className="CharSelectorBox">
                CharSelector
            </div>  
        </div>
    );
}

export default CharSelector;