import { Routes, Route } from 'react-router-dom';

import './App.css';

import { AuthScreen, FavoritesScreen, LandingScreen, ProductDetailScreen, SearchScreen } from './screens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/product" element={<ProductDetailScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </div>
  );
}

export default App;
