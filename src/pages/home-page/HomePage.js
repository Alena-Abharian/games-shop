import React from 'react';
import GameItem from '../../components/game-item/GameItem';
import { GAMES } from '../../configs/games.config';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="home-page">
            {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
};

export default HomePage;