import React from 'react';
import "./GameGenre.css"

const GameGenre = ({genre}) => {
    return (
        <span className="game-genre">
            {genre}
        </span>
    );
};

export default GameGenre;