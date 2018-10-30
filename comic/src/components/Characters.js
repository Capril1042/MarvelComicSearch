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

    componentDidMount() {
        const key = process.env.REACT_APP_API_KEY
        
        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&offset=0&limit=100&apikey=${key}`)
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
        console.log(this.state.marvelCharacters)
        return (
            <div className="Characters">
                <div className="Search">
                    search bar here
            </div>
            {this.state.marvelCharacters.map((charData,i)=> <CharContainer key={i} data={charData}/>)}
            
            <div className="Search">
                search buttons
            </div>
        </div>
        );
    }
}

export default Characters;