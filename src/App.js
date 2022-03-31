import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { WelcomePage } from './pages/WelcomePage';
import { CharactersPage } from './pages/CharactersPage';
import { CharPage } from './pages/CharPage';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/characters/:id" element={<CharPage />} />
            </Routes>
        </div>
    );
}

export default App;