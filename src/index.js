import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import MarvelService from './services/marvelService';

const marvelService = new MarvelService();

marvelService.getCharacterById(1009742).then(res => {
    return console.log(res);
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
