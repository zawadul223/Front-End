import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/home">Home</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/product">Product</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
