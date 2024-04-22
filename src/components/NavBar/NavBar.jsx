import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
return (
  <nav className="NavBar">
    <Link to={"/"}> Productos </Link>
    <section className='Categories'>
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
      <NavLink
        to={"/category/computers"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Computadoras
      </NavLink>
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar
