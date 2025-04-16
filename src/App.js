import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagePage';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import ProfilePage from './pages/ProfilePage';
import NextPartnersPage from './pages/NextPatnersPage';
import FeaturesFlow from './pages/FeaturesFlow';
import BasicFeaturesPage from './pages/BasicFeaturesPage';
import DesignPage from './pages/DesighPage';
import FinalPricePage from "./pages/FinalPricePage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/message" element={<MessagePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/nextPartners" element={<NextPartnersPage />} />
                <Route path="/basicFeaturesPage" element={<BasicFeaturesPage />} />
                <Route path="/designPage" element={<DesignPage />} />
                <Route path="/finalPrice" element={<FinalPricePage />} />
                {/* Новый маршрут для потока страниц с функциями */}
                <Route path="/features/*" element={<FeaturesFlow />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;