import React from "react";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold" href="#">Pizza House</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default NavbarComponent;
