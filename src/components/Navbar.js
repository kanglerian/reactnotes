import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return(
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className={ location.pathname === '/' ? 'active' : ''}>Beranda</Link>
        </li>
        <li>
          <Link to="/produk" className={ location.pathname === '/produk' ? 'active' : ''}>Produk</Link>
        </li>
        <li>
          <Link to="/tentang" className={ location.pathname === '/tentang' ? 'active' : ''}>Tentang</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;