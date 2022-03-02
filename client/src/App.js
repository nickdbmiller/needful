import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

import { verifyUser } from './services/user.js';
import { AuthScreen, FavoritesScreen, LandingScreen, ProductDetailScreen, SearchScreen } from './screens';
import Layout from './components/Layout/Layout';

function App() {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
    navigate("/");
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} logout={logout} query={query} setQuery={setQuery}>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/auth" element={<AuthScreen setCurrentUser={setCurrentUser}/>} />
          <Route path="/favorites" element={<FavoritesScreen currentUser={currentUser}/>} />
          <Route path="/product/:id" element={<ProductDetailScreen currentUser={currentUser}/>} />
          <Route path="/search" element={<SearchScreen query = {query}/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
