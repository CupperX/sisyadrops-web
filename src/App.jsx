import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainScreen from './MainScreen.jsx';
import StoriesPage from './StoriesPage.jsx';
import ChooseGame from "./ChooseGame/ChooseGame.jsx"
import TechScreen from "./TechScreens/TechScreen.jsx"
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
                        <Route path="/chooseGame" element={<ChooseGame />} />
                        <Route path="/techScreen" element={<TechScreen />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
    );
};

const App = () => {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
