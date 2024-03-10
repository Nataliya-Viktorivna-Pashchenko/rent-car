import { NavLink, Route, Routes } from "react-router-dom"
import './index.css'
import HomePage from "./pages/Home/HomePage"
import CatalogPage from "./pages/Catalog/CatalogPage"
import FavoritesPage from "./pages/Favorites/FavoritesPage"
import Layout from "./components/Layout/Layout"
import { Suspense } from "react"


function App() {

  return (
    <Layout>
          <Suspense fallback={<Layout/>}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage/> } />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Suspense>
         </Layout>
  )
}

export default App
