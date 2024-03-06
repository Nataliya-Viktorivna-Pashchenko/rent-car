import { NavLink } from "react-router-dom"
import './index.css'


function App() {

  return (
    <div>
      <header>
        <NavLink className = 'header-link' to='/' >Home</NavLink>
        <NavLink className = 'header-link' to='/catalog' >Catalog</NavLink>
        <NavLink className = 'header-link' to='/favorites' >Favorites</NavLink>
      </header>
     
    </div>
  )
}

export default App
