import React , { Component } from 'react';
import CharContainer from './CharContainer';

import './Characters.css';
require('dotenv').config();

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            marvelCharacters :[],
            limit: 100,
            offset: 0,
        };
    }

    buttonClickRight=(e)=>{
        let newOffset = this.state.offset + 99;
        this.setState({offset: newOffset});
    }

    buttonClickLeft=(e)=> {
        let newOffset = this.state.offset-99;
        e.preventDefault();
        this.setState({offset: newOffset})
    }

    // ToDo Functionality for search
     handleSearchSubmit = (e) => {
        
     }


// update fetch to include search terms
    componentWillUpdate() {
          const key = process.env.REACT_APP_API_KEY
        
        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&offset=${this.state.offset}&limit=${this.state.limit}&apikey=${key}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                this.setState({ marvelCharacters: data.data.results });
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    render() {
        console.log(this.state.offset);
        
        return (
            <div className="CharactersDisplay">
    <div className="CharCon">
            {this.state.marvelCharacters.map((charData,i)=> <CharContainer key={i} data={charData}/>)}
            <button onClick={this.buttonClickLeft}> L</button>
            
            <button onClick={this.buttonClickRight}> R</button></div>
        </div>
        );
    }
}

export default Characters;