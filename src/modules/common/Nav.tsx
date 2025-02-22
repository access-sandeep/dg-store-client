import { Link } from "react-router-dom";
import { showDropDown, closeDropDown } from "../../shared/animations/drop-down-menu";

export default function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light p-0'>
        <div className="collapse1 navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to={`/`}>Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={`#`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e)=>{
                        showDropDown(e);
                    }}>Product</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={`/products/all`} onClick={(e)=>{
                            closeDropDown(e);
                        }}>All</Link>
                        <Link className="dropdown-item" to={`#`}>Action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to={`#`}>Another action</Link>
                        <Link className="dropdown-item" to={`#`}>Something else here</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`#`}>Promo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/contact-us`}>Contact us</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}