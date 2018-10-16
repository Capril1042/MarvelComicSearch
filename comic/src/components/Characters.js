import React , { Componenet } from 'react';
import CharContainer from './CharContainer';

class Characters extends Componenet {
    constructor(){
        super();
        this.state = {
            marvelCharacters :[]
        };
    }

    componenetDidMount() {
        fetch('https://gateway.marvel.com/v1/public/characters')
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
        return (
            <div className="Characters">
            {this.state.marvelCharacters.map((charData,i)=> <CharContainer key={i} data={charData}/>)}
            </div>
        );
    }
}

export default Characters;