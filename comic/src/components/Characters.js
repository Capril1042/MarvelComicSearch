import React , { Component } from 'react';
import CharContainer from './CharContainer';
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
        e.preventDefault();
        this.setState({offset: newOffset})
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
    componentDidMount() {
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