import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [selectedGame, setSelectedGame] = useState('');

    return (
        <GameContext.Provider value={{ selectedGame, setSelectedGame }}>
            {children}
        </GameContext.Provider>
    );
};