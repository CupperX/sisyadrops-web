import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GameProvider } from './ChooseGame/GameContext';
import MainScreen from './MainScreen.jsx';
import StoriesPage from './StoriesPage.jsx';
import Login from './Login.jsx';
import Access from './Access.jsx'
import Autorizate from './Autorizate.jsx';
import Accaunt from './Accaunt.jsx';
import Game from './ChooseGame/ChooseGame.jsx';
import './App.css';
import ConnectScreen from "@/ConnectScreen.jsx";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="slide"
                    timeout={260}
                >
                    <Routes location={location}>
                        <Route path="/" element={<MainScreen />} />
                        <Route path="/stories" element={<StoriesPage />} />
                        <Route path="/connectScreen" element={<ConnectScreen />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/access" element={<Access />} />
                        <Route path="/autorizate" element={<Autorizate />} />
                        <Route path="/accaunt" element={<Accaunt />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
    );
};

const App = () => {
    return (
        <GameProvider>
            <Router>
                <AnimatedRoutes />
            </Router>
        </GameProvider>
    );
};

export default App;
