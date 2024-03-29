import { NavLink, Route, Routes } from "react-router-dom"
import './index.css'
import Layout from "./components/Layout/Layout"
import { Suspense, lazy} from "react"

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const CatalogPage = lazy(() => import('./pages/Catalog/CatalogPage'));
// import FavoritesPage from "./pages/Favorites/FavoritesPage"
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));


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
