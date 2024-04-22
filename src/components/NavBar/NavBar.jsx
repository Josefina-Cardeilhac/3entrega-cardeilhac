import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
return (
  <nav className="NavBar"> 
    <section className='Categories'>
    <Link to={"/"}> Products </Link>
      <NavLink
        to={"/Home"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/Contactanos"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Contctanos
      </NavLink>
    
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar
