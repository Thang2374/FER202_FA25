  import React from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';

  function App() {
    return (
      <div>
        {/* Navbar */}
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

        {/* Hero Section */}
        <div className="hero-section text-white text-center">
          <img src="/images/Pizza.jpg" alt="Pizza" className="w-100" />
          <div className="hero-text">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>

        {/* Menu Section */}
        <section className="container my-5">
          <h2 className="text-white mb-4">Our Menu</h2>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="card">
                <img src="/images/Margherita.jpg" className="card-img-top" alt="Margherita Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="text-danger"><del>$40.00</del> $20.00</p>
                  <button className="btn btn-dark">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-3">
              <div className="card">
                <img src="/images/Mushroom.jpg" className="card-img-top" alt="Mushroom Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <p>$25.00</p>
                  <button className="btn btn-dark">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-3">
              <div className="card">
                <img src="/images/Hawaiian.jpg" className="card-img-top" alt="Hawaiian Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <p>$10.00</p>
                  <button className="btn btn-dark">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-3">
              <div className="card">
                <img src="/images/Pesto.jpg" className="card-img-top" alt="Pesto Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <p className="text-danger"><del>$60.00</del> $30.00</p>
                  <button className="btn btn-dark">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="container my-5 text-white">
          <h2 className="mb-4 text-center">Book Your Table</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Your Name *" />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control" placeholder="Your Email *" />
              </div>
              <div className="col-md-4">
                <select className="form-control">
                  <option>Select a Service</option>
                  <option>Dine-In</option>
                  <option>Takeaway</option>
                  <option>Delivery</option>
                </select>
              </div>
            </div>
            <textarea className="form-control mb-3" placeholder="Please write your comment" rows="4"></textarea>
            <button className="btn btn-warning">Send Message</button>
          </form>
        </section>
      </div>
    );
  }

  export default App;
