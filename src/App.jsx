import { NavLink, Route, Routes } from "react-router-dom"
import './index.css'
import HomePage from "./pages/Home/HomePage"
import CatalogPage from "./pages/Catalog/CatalogPage"
import FavoritesPage from "./pages/Favorites/FavoritesPage"


function App() {

  return (
    <div>
      <header>
        <NavLink className = 'header-link' to='/' >Home</NavLink>
        <NavLink className = 'header-link' to='/catalog' >Catalog</NavLink>
        <NavLink className = 'header-link' to='/favorites' >Favorites</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage/> } />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </main>
     
    </div>
  )
}

export default App
