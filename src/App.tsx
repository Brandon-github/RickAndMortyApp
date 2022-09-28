import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Error404 from './pages/Error/Error404/Error404';
import ErrorPage from './pages/Error/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/page/:id" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="error/page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
