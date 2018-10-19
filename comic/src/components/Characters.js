import React , { Component } from 'react';
import CharContainer from './CharContainer';
require('dotenv').config();

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            marvelCharacters :[]
        };
    }

    componenetDidMount() {
        const key = process.env.REACT_APP_API_KEY

        fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${key}`, {
            offset:0, 
            limit:100})
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({ marvelCharacters: data.results });
            })
            .catch(err => {
                throw new Error(err);
            });
    }
    render() {
        console.log(this.state)
        return (
            <div className="Characters">
            {this.state.marvelCharacters.map((charData,i)=> <CharContainer key={i} data={charData}/>)}
            </div>
        );
    }
}

export default Characters;