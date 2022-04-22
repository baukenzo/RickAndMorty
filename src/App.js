import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { WelcomePage } from './pages/WelcomePage';
import { CharactersPage } from './pages/CharactersPage';
import { CharPage } from './pages/CharPage';
import {SignInPage} from './pages/SignInPage';
import {StartDown} from './pages/StartDown';
import {TodoPage} from "./pages/TodoPage";
import { ShopPage } from './pages/ShopPage';

import {Auth} from "./context/Auth";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(localStorage.getItem('idToken'))


    return (
        <Auth.Provider value={{ token, setToken }}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/characters" element={<CharactersPage />} />
                    <Route path="/characters/:id" element={<CharPage />} />
                    <Route path="/signin/" element={<SignInPage />} />
                    <Route path="/startdown/" element={<StartDown />} />
                    <Route path="/todopage/" element={<TodoPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Routes>
            </div>
        </Auth.Provider>
    );
}

export default App;