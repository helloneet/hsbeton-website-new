import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProdukPage from './pages/ProdukPage';
import TentangPage from './pages/TentangPage';
import KontakPage from './pages/KontakPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produk" element={<ProdukPage />} />
                <Route path="/tentang-kami" element={<TentangPage />} />
                <Route path="/kontak" element={<KontakPage />} />
            </Routes>
        </Router>
    );
}

export default App;
