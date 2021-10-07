import { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="s">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li style={{marginLeft: "10px", marginRight: "10px"}} className="nav-item">
                                <Link style={{color: "white", textDecoration: "none"}} to='/'>Home</Link>
                            </li>
                            <li style={{marginLeft: "10px", marginRight: "10px"}} className="nav-item">
                                <Link style={{color: "white", textDecoration: "none"}} to='/about'>About</Link>
                            </li>
                            <li style={{marginLeft: "10px", marginRight: "10px"}} className="nav-item">
                                <Link style={{color: "white", textDecoration: "none"}} to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
