import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Football Universe</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <a href="/carrito">🛒 Carrito</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
