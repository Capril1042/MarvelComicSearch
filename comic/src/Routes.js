import React from 'react';
import {Switch, Route } from 'react-router-dom';

import App from './App.js';
import CharacterInfo from'./components/CharacterInfo/CharacterInfo';
import ComicSearch from './components/ComicSearch/ComicSearch';


const Routes = () => {
    return (
        <Switch>
        <Route path="/" exact component={App} />
        <Route path="/CharacterInfo" component={CharacterInfo} />
        <Route path="/ComicSearch" component={ComicSearch} /> 
        </Switch>
    );
};

export default Routes;