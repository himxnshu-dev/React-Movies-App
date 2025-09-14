import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="app-name">
                <NavLink to='/'>Movie App</NavLink>
            </div>
            <div className="nav-links">
                <NavLink to='/' className="nav-link">Home</NavLink>
                <NavLink to='/favorites' className="nav-link">Favorites</NavLink>
            </div>
        </nav>
    );
}

export default NavBar