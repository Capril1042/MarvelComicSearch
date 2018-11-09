import React, { Component } from 'react';


//To Do 
// functionality for search comic- using marvel api
class CharSelector extends Component {
   constructor() {
        super();
        this.state = {
            selectedCharacters : []
        };
    }
    render(){
    return(
        <div className="CharSelector">
            <p> choosen characters will apper here</p>
           <div className="SelectorButtons">
            <div className="SearchComics"> search comics button 
            </div>
            <div className="ClearCharacters"> reset button</div>
            </div>
            <div className="CharSelectorBox">
                {this.state.selectedCharacters[0]}
            </div>
            <div className="CharSelectorBox">
                {this.state.selectedCharacters[1]}
            </div>
            <div className="CharSelectorBox">
                {this.state.selectedCharacters[2]}
            </div>  
             <div className="CharSelectorBox">
                {this.state.selectedCharacters[3]}
            </div>  
        </div>
    );
}
}
export default CharSelector;